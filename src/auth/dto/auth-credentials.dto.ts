import { IsString, MaxLength, MinLength, IsEmail } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(128, { message: 'Password is too long (128 characters max)' })
  password: string;
}
