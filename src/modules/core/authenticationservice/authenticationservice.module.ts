import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AuthenticationServiceController } from './controllers/authenticationservice.controller';
import { AuthenticationService } from './services/authenticationservice.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [AuthenticationServiceController],
  providers: [AuthenticationService],
})
export class AuthenticationServiceModule {}