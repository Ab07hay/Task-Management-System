import { Controller, Get, Body,Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateUsersDto } from 'src/dto/create-users.dto';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post('user')
  userLogin(@Body() Payload:CreateUsersDto) {
    
    return this.loginService.userLogin(Payload);
  }
}
