import { IsNotEmpty, MinLength, MaxLength, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'Username tidak boleh kosong' })
  @MinLength(4, { message: 'Username minimal 4 karakter' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  @MaxLength(20, { message: 'Password maksimal 20 karakter' })
  password: string;
}
