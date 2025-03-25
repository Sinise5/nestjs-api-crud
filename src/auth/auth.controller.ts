import { Controller, Post, Body, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    // Validasi input kosong sudah dilakukan oleh class-validator
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Username atau password salah');
    }

    return {
      message: 'Login berhasil',
      data: await this.authService.login(user),
    };
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    // Pastikan username belum dipakai
    const userExists = await this.authService.findUserByUsername(registerDto.username);
    if (userExists) {
      throw new BadRequestException('Username sudah digunakan');
    }

    const newUser = await this.authService.register(registerDto.username, registerDto.password);
    return {
      message: 'Registrasi berhasil',
      data: newUser,
    };
  }
}
