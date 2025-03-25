import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (!user) {
      return null;
    }
    const isPasswordValid = await this.usersService.validatePassword(user, password);
    return isPasswordValid ? user : null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(username: string, password: string) {
    return await this.usersService.createUser(username, password);
  }

  async findUserByUsername(username: string) {
    return await this.usersService.findByUsername(username);
  }
}
