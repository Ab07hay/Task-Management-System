import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsersDto } from 'src/dto/create-users.dto';
import { IUsers } from 'src/interfaces/users.interface';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('TaskManagementSystem') private UsersSchema: Model<IUsers>,
  ) {}
  async userLogin(UserCredentials: CreateUsersDto) {
    // return this.UsersSchema.save()
    const User = await new this.UsersSchema(UserCredentials);
    return User.save();
  }
}
