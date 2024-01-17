import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiratio: false,
            secretOrKey: process.env.JWT_SECRET,
        })
    }

    async validate(payloud: any) {
        return { id: payloud.id, name: payloud.name };
    }
}