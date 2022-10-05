/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesController } from './controllers/heroes.controller';
import { HeroesSchema } from './schemas/heroes.schema';
import { HeroesService } from './services/heroes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'heroes', schema: HeroesSchema }]),
  ],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class MongoModule {}
