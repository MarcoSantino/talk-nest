/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Hero } from '../interfaces/hero';
import { RequestSaveHero } from '../model/request-save-hero';
import { ResponseRetrieveHeroes } from '../model/response-retrieve-heroes';
import { HeroesDocument } from '../schemas/heroes.schema';
import { HeroesService } from '../services/heroes.service';

@Controller('mongo/heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @ApiTags('Mongo')
  @ApiResponse({
    type: ResponseRetrieveHeroes,
    isArray: true,
  })
  @Get()
  retrieveHeroes(): Promise<Hero[]> {
    return this.heroesService.retrieveHeroes();
  }

  @ApiTags('Mongo')
  @ApiBody({ type: RequestSaveHero })
  @Post()
  setHeroes(@Body() body: Hero): Promise<HeroesDocument> {
    return this.heroesService.setHeroes(body);
  }
}
