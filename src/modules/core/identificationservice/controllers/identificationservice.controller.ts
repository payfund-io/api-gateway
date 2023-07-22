import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IdentificationService } from '../services/identificationservice.service';

@Controller('identification')
@ApiTags('IdentificationService')
export class IdentificationServiceController {
  constructor(private identificationService: IdentificationService) {}

  @Post('/signup')
  @ApiOperation({
    description: 'SignUp User',
    summary: 'Endpoint for creating a users account',
  })
  async signUp() {
    return this 
  }

  @Post('/signIn')
  @ApiOperation({
    description: 'SignIn User',
    summary: 'Endpoint for signing in a users account',
  })
  async signIn() {}

}
