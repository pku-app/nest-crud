import { 
    BadRequestException,
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpStatus, 
    NotFoundException, 
    Param, 
    Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

import mongoose from 'mongoose';

@Controller('user')
export class UserControler {
    constructor(private userService: UserService) {}    
    
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.listAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<User> {
        if(! mongoose.Types.ObjectId.isValid(id)){
            throw new BadRequestException('Invalid user');
        }
        const user: User = await this.userService.findById(id);
        if(user == undefined){
            throw new NotFoundException('User not found');
        }
        return user;
    }

    @Put(':id')
    async updateItem(@Param('id') id, @Body() user: User) {
        this.userService.update(id, user);
        return this.userService.findById(id);
    }

    @Delete(':id')
    async deleteItem(@Param('id') id) {
        this.userService.delete(id);
        return { status: HttpStatus.OK };
    }
}
