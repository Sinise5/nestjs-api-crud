import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: { findByUsername: jest.fn(), createUser: jest.fn() } },
        { provide: JwtService, useValue: { sign: jest.fn() } },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should validate user', async () => {
    usersService.findByUsername = jest.fn().mockResolvedValue({ username: 'test', password: 'hashedPassword' });
    expect(await authService.validateUser('test', 'hashedPassword')).toBeDefined();
  });
});
