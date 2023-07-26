import { Test, TestingModule } from '@nestjs/testing';
import { IdentificationServiceController } from './identification-service.controller';

describe('IdentificationService', () => {
  let service: IdentificationServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentificationServiceController],
    }).compile();

    service = module.get<IdentificationServiceController>(
      IdentificationServiceController,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
