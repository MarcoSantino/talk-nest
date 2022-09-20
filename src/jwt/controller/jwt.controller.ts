/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Headers } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { JwtService } from '../services/jwt.service';

@Controller('auth')
export class JwtController {
  constructor(private jwt: JwtService) {}

  @ApiTags('JWT')
  @Get()
  retrieveToken(): { token: string } {
    return { token: this.jwt.generateToken() };
  }

  @ApiTags('JWT')
  @ApiHeader({ name: 'Authorization', required: true })
  @Get('decrypt')
  decryptToken(@Headers() header): { [key: string]: string } {
    return this.jwt.verifyToken(header.authorization.replace('Bearer ', ''));
  }
}
