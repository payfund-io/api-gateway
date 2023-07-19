import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationServiceController } from './authenticationservice.controller';

describe('AccountService', () => {
  let service: AuthenticationServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthenticationServiceController],
    }).compile();

    service = module.get<AuthenticationServiceController>(
      AuthenticationServiceController,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
