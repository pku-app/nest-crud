import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface"

@Injectable()
export class UserService{
    constructor(
        @InjectModel('User') private userModel: Model<User>
    ) {}
}
