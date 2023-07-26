import { Injectable } from '@nestjs/common';
import { SignInUserDTO, SignUpUserDTO } from '../dtos/identification.dto';

@Injectable()
export class IdentificationService {
  
  async signUp(data: SignUpUserDTO) {

  }

  async signIn(data: SignInUserDTO) {

  }

}
