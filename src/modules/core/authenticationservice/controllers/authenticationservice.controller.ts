import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthenticationService } from '../services/authenticationservice.service';

@Controller('authentication')
@ApiTags('AuthenticationService')
export class AuthenticationServiceController {
  constructor(private authenticationService: AuthenticationService) {}

  @Get('/signup')
  @ApiOperation({
    description: 'SignUp User',
    summary: 'Endpoint for creating a users account',
  })
  async signUp() {}
}
