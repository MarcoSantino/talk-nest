import { JwtController } from './controller/jwt.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { JwtModule as Jwt } from '@nestjs/jwt';
import { JwtService } from './services/jwt.service';

@Module({
  imports: [Jwt.register({ secret: '6C2F2DDD95BA71511C49F6BE66364' })],
  controllers: [JwtController],
  providers: [JwtService],
})
export class JwtModule {}
