import { Module } from '@nestjs/common';
import { PrismaService } from 'src/dataBase/prisma.servise';
import { SpiritController } from './spirit.controller';
import { SpiritService } from './spirit.service';

@Module({
  controllers: [SpiritController],
  providers: [SpiritService, PrismaService],
})
export class SpiritModule { }
