import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import * as dotenv from 'dotenv';
import { PrismaService } from "src/dataBase/prisma.servise";
import { UserModule } from "src/user/user.module";
import { UserService } from "src/user/user.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";
dotenv.config()

@Module({
    imports: [

        UserModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: 60 * 60 },
        })

    ],
    controllers: [AuthController],
    providers: [AuthService, PrismaService, UserService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})

export class AuthModule { }