import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';

import { users, usersDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(users.name ,'test') private readonly userModel: Model<usersDocument>
  ){

  }
  create(createUserDto: CreateUserDto) {
    const create = new this.userModel(createUserDto);
    return create.save()
  }

  findAll() {
    return this.userModel.find().exec()
  }

  findOne(id: string) {
    return this.userModel.findOne({_id:id}).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findOneAndUpdate({_id:id},{$set:updateUserDto}, {new:true})
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id:id}).exec();
  }
}
