import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getEnvironment } from './configs/env.configs';
import { HealthModule } from './modules/common/health/health.module';

@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      load: getEnvironment(),
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
