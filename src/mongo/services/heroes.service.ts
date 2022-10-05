/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hero } from '../interfaces/hero';
import { HeroesDocument } from '../schemas/heroes.schema';

@Injectable()
export class HeroesService {
  constructor(
    @InjectModel('heroes') private heroModel: Model<HeroesDocument>,
  ) {}

  async retrieveHeroes(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }

  async setHeroes(body): Promise<HeroesDocument> {
    const createdHeroes = new this.heroModel(body);
    return createdHeroes.save();
  }
}
