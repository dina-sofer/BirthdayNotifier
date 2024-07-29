import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dina:nT64kgMJ1ntcw55l@cluster0.4kqlvt2.mongodb.net/'),
    UserModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
 