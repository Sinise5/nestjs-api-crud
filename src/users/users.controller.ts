import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.usersService.findById(id);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async createUser(@Body() body): Promise<User> {
    return this.usersService.createUser(body.username, body.password);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() body): Promise<User> {
    return this.usersService.updateUser(id, body.username, body.password);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}
