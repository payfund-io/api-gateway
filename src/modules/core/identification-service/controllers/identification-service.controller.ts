import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IdentificationService } from '../services/identification-service.service';
import { SignInUserDTO, SignUpUserDTO } from '../dtos/identification.dto';

@Controller('identification')
@ApiTags('IdentificationService')
export class IdentificationServiceController {
  constructor(private identificationService: IdentificationService) {}

  @Post('/signup')
  @ApiOperation({
    description: 'SignUp User',
    summary: 'Endpoint for creating a users account',
  })
  async signUp(@Body() dto: SignUpUserDTO) {
    return this.identificationService.signUp(dto);
  }

  @Post('/signIn')
  @ApiOperation({
    description: 'SignIn User',
    summary: 'Endpoint for signing in a users account',
  })
  async signIn(@Body() dto: SignInUserDTO) {
    return this.identificationService.signIn(dto);
  }
  
}
