import {
  Controller,
  Get,
  Request, 
  UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor() {}    

  @UseGuards(JwtAuthGuard)
  @Get()
  getMe(@Request() req) {
    return req.user;
  }
}
