import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

import { UserControler } from './user.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserControler],
    providers: [UserService],
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
})
export class UserModule {}