import { ApiProperty } from '@nestjs/swagger';
import { RequestSaveHero } from './request-save-hero';

export class ResponseRetrieveHeroes extends RequestSaveHero {
  @ApiProperty({
    required: true,
  })
  _id: string;
  @ApiProperty({
    required: true,
  })
  __v: number;
}
