import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpUserDTO {
  @IsNotEmpty({ message: 'email address is required' })
  @ApiProperty({
    type: 'string',
    description: 'email of user',
  })
  email: string;

  @IsNotEmpty({ message: 'phone number is required' })
  @ApiProperty({
    type: 'string',
    description: 'phone number of user',
  })
  phonenumber: string;

  @IsNotEmpty({ message: 'password is required' })
  @ApiProperty({
    type: 'string',
    description: 'password of user',
  })
  password: string;
}

export class SignInUserDTO {
  @IsNotEmpty({ message: 'email address is required' })
  @ApiProperty({
    type: 'string',
    description: 'email of user',
  })
  email: string;

  @IsNotEmpty({ message: 'password is required' })
  @ApiProperty({
    type: 'string',
    description: 'password of user',
  })
  password: string;
}
