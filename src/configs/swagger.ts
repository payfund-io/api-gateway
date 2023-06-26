import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerConfig = new DocumentBuilder()
.setTitle('PayFund')
.setDescription('API gateway for interacts with the different PayFund microservices')
.setVersion('1.0')
.addTag('PayFund')
.build();