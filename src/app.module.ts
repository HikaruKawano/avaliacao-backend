import { Module } from '@nestjs/common';
import { SpiritModule } from './Spirit/spirit.module';
import { AuthModule } from './auth/auth.module';
import { NotationModule } from './notation/notation.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, SpiritModule, NotationModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
