import { Module } from '@nestjs/common';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { PrismaService } from 'src/dataBase/prisma.servise';
import { NotationController } from './notation.controller';
import { NotationService } from './notation.service';

@Module({
  controllers: [NotationController],
  providers: [NotationService, JwtStrategy, PrismaService],
})
export class NotationModule { }
