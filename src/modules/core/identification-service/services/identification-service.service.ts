import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { SignInUserDTO, SignUpUserDTO } from '../dtos/identification.dto';
import {
  IDENTIFICATION_SERVICE_NAME,
  IdentificationServiceClient,
} from '../protobuf/identification-service.pb';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { catchError, lastValueFrom, throwError } from 'rxjs';

@Injectable()
export class IdentificationService implements OnModuleInit {
  private identificationService: IdentificationServiceClient;
  constructor(
    @Inject(IDENTIFICATION_SERVICE_NAME) private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.identificationService =
      this.client.getService<IdentificationServiceClient>(
        IDENTIFICATION_SERVICE_NAME,
      );
  }

  async signUp(data: SignUpUserDTO): Promise<any> {
    return this.identificationService.signUp(data)
  }

  async signIn(data: SignInUserDTO) {}
}
