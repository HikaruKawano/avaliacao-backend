import { HttpCode, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrpyt from 'bcrypt';
import 'dotenv/config';
import { NotFoundError } from "rxjs";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async valiladeUser(email: string, pass: string) {
        const user = await this.userService.GetUserByEmail(email);
        if (user) {
            const isMath = await bcrpyt.compare(pass, user.password);
            if (!isMath) {
                return null;
            }

            const { password, ...result } = user;
            return result
        } else {
            throw new NotFoundException('User not found');

        }
    };

    async login(user: any) {
        const payloud = { username: user.name, sub: user.id };
        return {
            access_token: this.jwtService.sign(payloud),
            user
        }
    }
}