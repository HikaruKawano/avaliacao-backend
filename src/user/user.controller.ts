import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { userDTO } from '../dto/user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async Create(@Body() data: userDTO) {

    return this.userService.Create(data)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async GetAllUser() {
    return this.userService.GetAllUser();
  };

  @UseGuards(JwtAuthGuard)
  @Get(":email")
  async GetUserById(@Param("email") email: string) {
    return this.userService.GetUserByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async userDelete(@Param("id") id: string) {
    return this.userService.UserDelete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  async userUpdate(@Param("id") id: string, @Body() data: userDTO) {
    return await this.userService.UserUpdate(id, data);
  }
}
