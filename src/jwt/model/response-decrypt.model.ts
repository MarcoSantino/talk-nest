import { ApiProperty } from '@nestjs/swagger';

export class ResponseDecryptToken {
  @ApiProperty({
    required: true,
  })
  name: string;
  @ApiProperty({
    required: true,
  })
  lastName: string;
  @ApiProperty({
    required: true,
  })
  iat: number;
}
