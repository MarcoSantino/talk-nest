import { Injectable } from '@nestjs/common';
import { JwtService as Jwt } from '@nestjs/jwt';

@Injectable()
export class JwtService {
  constructor(private readonly jwt: Jwt) {}

  generateToken(): string {
    const token = this.jwt.sign({
      name: 'Ciccio',
      lastName: 'Pasticcio',
    });

    return token;
  }

  verifyToken(token: string): { [key: string]: string } {
    return this.jwt.verify(token);
  }
}
