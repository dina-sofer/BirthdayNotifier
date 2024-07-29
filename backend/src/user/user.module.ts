import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { userSchema } from './user.model';
import { UserController } from './user.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema}])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
