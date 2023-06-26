import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HealthService } from '@/modules/common/health/services/health.service';

@Controller('health')
@ApiTags('Health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  @HealthCheck()
  @ApiOperation({
    description: 'Request health information',
    summary: 'Endpoint for checking health status',
  })
  async checkHealth() {
    return await this.healthService.check();
  }
}
