import { ApiProperty } from '@nestjs/swagger';

export class UserModel {
  @ApiProperty({
    required: true,
  })
  username: string;
  @ApiProperty({
    required: true,
  })
  email: string;
  @ApiProperty({
    required: true,
  })
  password: string;
}

export class ResponseUserModel extends UserModel {
  @ApiProperty()
  id: number;
}
