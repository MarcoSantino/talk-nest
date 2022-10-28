/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../interfaces/user';
import { ResponseUserModel, UserModel } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Controller('postgres/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiTags('PostgreSQL')
  @ApiResponse({
    type: ResponseUserModel,
    isArray: true,
  })
  @Get()
  getUsers() {
    return this.userService.findUsers();
  }

  @ApiTags('PostgreSQL')
  @ApiBody({
    type: UserModel,
  })
  @Post()
  generateUser(@Body() user: User) {
    return this.userService.createUser(user);
  }
}
