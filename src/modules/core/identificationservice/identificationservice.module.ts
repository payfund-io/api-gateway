import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { IdentificationServiceController } from './controllers/identificationservice.controller';
import { IdentificationService } from './services/identificationservice.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [IdentificationServiceController],
  providers: [IdentificationService],
})
export class IdentificationServiceModule {}