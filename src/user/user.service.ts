import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface"

@Injectable()
export class UserService{
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async listAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findById(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async update(id: string, user: User): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user).exec();
    }

    async delete(id: string) {
        const userDeleted = this.userModel.findOneAndDelete({ _id: id }).exec();
        return (await userDeleted).remove();
    }
}