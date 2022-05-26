import { 
  IsString, 
  MaxLength, 
  MinLength, 
  IsEmail, 
  IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(128, { message: 'Password is too long (128 characters max)' })
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
