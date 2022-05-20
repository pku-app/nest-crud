import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<any> {
    const user = await this.authService.signUp(authCredentialsDto);
    const token = await this.authService.signIn(user);
    const sanitizedUser = this.authService.sanitizeUser(user);

    return { sanitizedUser, token };
  }

  @Post('/signin')
  async signIn(@Request() req) {
    return this.authService.signIn(req.body);
  }
}
