import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { users, usersSchema } from './schemas/user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:users.name, schema: usersSchema}],'test')
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
