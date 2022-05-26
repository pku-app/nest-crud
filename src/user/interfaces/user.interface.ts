import { Document } from 'mongoose';

export class User extends Document {
  readonly email: string;
  readonly password: string;
  readonly name: string;
}
