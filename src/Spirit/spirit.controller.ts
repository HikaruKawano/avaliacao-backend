import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { SpiritDto } from 'src/dto/spirit.dto';
import { SpiritService } from './spirit.service';

@Controller('Spirit')
export class SpiritController {
  constructor(private readonly SpiritService: SpiritService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async CreateSpirit(@Body() data: SpiritDto) {
    return this.SpiritService.CreateSpirit(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async GetAllSpirit() {
    return await this.SpiritService.GetAllSpirit();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':brand')
  async GetSpiritByBrand(@Param('brand') @Body() brand: string) {
    return this.SpiritService.GetSpiritByBrand(brand);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async PutSpirit(@Param('id') id: string, @Body() data: SpiritDto) {
    return this.SpiritService.PutSpirit(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async DeleteSpirit(@Param('id') id: string) {
    return this.SpiritService.DeleteSpirit(id);
  }

}
