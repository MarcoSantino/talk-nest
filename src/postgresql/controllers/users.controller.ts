/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../interfaces/user';
import { UsersService } from '../services/users.service';

@Controller('postgres/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiTags('PostgreSQL')
  @Get()
  getUsers() {
    return this.userService.findUsers();
  }

  @ApiTags('PostgreSQL')
  @Post()
  generateUser(@Body() user: User) {
    return this.userService.createUser(user);
  }
}
