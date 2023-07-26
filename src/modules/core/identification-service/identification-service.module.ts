import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { IdentificationServiceController } from './controllers/identification-service.controller';
import { IdentificationService } from './services/identification-service.service';
import { HttpModule } from '@nestjs/axios';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    TerminusModule, 
    HttpModule,
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join('node_modules/@payfund/grpc-proto/proto/health.proto'),
        },
      },
    ]),
  ],
  controllers: [IdentificationServiceController],
  providers: [IdentificationService],
})
export class IdentificationServiceModule {}