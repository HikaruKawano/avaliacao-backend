import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrpyt from 'bcrypt';
import 'dotenv/config';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async valiladeUser(email: string, pass: string) {
        const user = await this.userService.GetUserByEmail(email);
        const isMath = await bcrpyt.compare(pass, user.password);
        if (!isMath) {
            return null;
        }

        const { password, ...result } = user;
        return result
    };

    async login(user: any) {
        const payloud = { username: user.name, sub: user.id };
        return {
            access_token: this.jwtService.sign(payloud),
            user
        }
    }
}