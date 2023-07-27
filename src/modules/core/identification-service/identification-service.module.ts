import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { IdentificationServiceController } from './controllers/identification-service.controller';
import { IdentificationService } from './services/identification-service.service';
import { HttpModule } from '@nestjs/axios';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import {
  IDENTIFICATION_SERVICE_NAME,
  IDENTIFICATION_SERVICE_V1_PACKAGE_NAME,
} from './protobuf/identification-service.pb';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    ClientsModule.registerAsync([
      {
        name: IDENTIFICATION_SERVICE_NAME,
        inject: [ConfigService],
        useFactory: async (config: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            url: config.get<string>('microservices.identificationService.url'),
            package: IDENTIFICATION_SERVICE_V1_PACKAGE_NAME,
            protoPath: join(
              'node_modules/@payfund/grpc-proto/proto/identification-service.proto',
            ),
          },
        }),
      },
    ]),
  ],
  controllers: [IdentificationServiceController],
  providers: [IdentificationService],
})
export class IdentificationServiceModule {}
