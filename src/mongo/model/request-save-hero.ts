import { ApiProperty } from '@nestjs/swagger';

export class RequestSaveHero {
  @ApiProperty({
    required: true,
  })
  heroName: string;
  @ApiProperty({
    required: true,
  })
  personName: string;
  @ApiProperty()
  region: string;
}
