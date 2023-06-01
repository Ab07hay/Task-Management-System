import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from 'src/schema/task.schema';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://abhaymanmode9991:vkqBIePaA9E3AuWm@cluster0.udemcbw.mongodb.net/Cluster0?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{ name: 'TaskManagementSystem', schema: UsersSchema }])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
