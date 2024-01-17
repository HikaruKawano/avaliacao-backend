import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { NotationDTO } from 'src/dto/notation.dto';
import { NotationService } from './notation.service';

@Controller('notation')
export class NotationController {
  constructor(private readonly notationService: NotationService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async CreateNotation(@Body() data: NotationDTO) {
    return this.notationService.CreateNotation(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async GetAllNotation() {
    return this.notationService.GetAllNotation();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":userid")
  async GetNotationByUser(@Param('userid') userid: string) {
    return this.notationService.GetNotationByUser(userid);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  async UpdateNotation(@Param("id") id: string, @Body() data: NotationDTO) {
    return this.notationService.UpdateNotation(data, id)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async DeleteNotation(@Param("id") id: string) {
    return this.notationService.DeleteNotation(id)
  }
}
