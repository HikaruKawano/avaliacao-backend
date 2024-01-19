import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/dataBase/prisma.servise';
import { userDTO } from '../dto/user.dto';
@Injectable()
export class UserService {

    constructor(private PrismaServise: PrismaService) { }

    async Create(data: userDTO) {
        data.password = await bcrypt.hash(data.password, 10);

        let user = await this.PrismaServise.tb_user.create({ data })

        return user;
    };

    async GetAllUser() {
        let user = await this.PrismaServise.tb_user.findMany();

        return user;
    }

    async GetUserByEmail(email: string) {
        let user = await this.PrismaServise.tb_user.findUnique({
            where: {
                email: email,
            }
        })

        return user;
    }

    async UserDelete(id: string) {
        let user = await this.PrismaServise.tb_user.deleteMany({
            where: {
                userId: id,
            }
        })

        if (user.count == 1) {
            return "User delete susses";
        }

        return "Error delete user";
    }

    async UserUpdate(id: string, data: userDTO) {
        let user = await this.PrismaServise.tb_user.updateMany({
            data,
            where: {
                userId: id,
            }
        })

        if (user.count == 1) {
            return "user update susses"
        }
        return "error update user"
    }
}
