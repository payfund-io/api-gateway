import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheckError,
  HealthIndicatorResult,
  MicroserviceHealthIndicator,
  GRPCHealthIndicator,
} from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';
import { map } from 'radash';
import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';
import { HEALTH_V1_PACKAGE_NAME } from '../protobuf/health.pb';

@Injectable()
export class HealthService {
  constructor(
    private configService: ConfigService,
    private healthCheckService: HealthCheckService,
    private http: HttpHealthIndicator,
    private microservice: MicroserviceHealthIndicator,
    private grpc: GRPCHealthIndicator,
  ) {}

  async check() {
    const _services = [this.checkGateway(), this.checkAuthentication()];
    const services = await map(_services, async (service) => {
      try {
        return () => service;
      } catch (error: unknown) {
        if (error instanceof HealthCheckError) {
          return {
            ...error.causes,
          };
        }
      }
    });
    try {
      const { status, details } = await this.healthCheckService.check(services);
      return { status, details };
    } catch (error) {
      if (error instanceof ServiceUnavailableException) {
        const { status, details } =
          error.getResponse() as HealthIndicatorResult;
        return { status, details };
      }
    }
  }

  async checkGateway(): Promise<HealthIndicatorResult> {
    const gatewayUrl = this.configService.get<string>('app.url');
    return await this.http.pingCheck('GATEWAY', gatewayUrl);
  }

  async checkAuthentication(): Promise<HealthIndicatorResult> {
    const authenticationUrl = this.configService.get<string>(
      'microservices.authentication.url',
    );
    return await this.grpc.checkService<GrpcOptions>(
      'AUTHENTICATION',
      HEALTH_V1_PACKAGE_NAME,
      {
        timeout: 50000,
        url: authenticationUrl,
        package: HEALTH_V1_PACKAGE_NAME,
        protoPath: join(
          'node_modules/@payfund/grpc-proto/proto/health.proto',
        ),
      },
    );
  }
}
