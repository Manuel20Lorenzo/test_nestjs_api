import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test_alfred', {connectionName:'test'})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
