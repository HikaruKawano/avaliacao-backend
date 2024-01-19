import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/dataBase/prisma.servise";
import { NotationDTO } from "src/dto/notation.dto";





@Injectable()
export class NotationService {
    constructor(private PrismaService: PrismaService) { }

    async CreateNotation(data: NotationDTO) {
        return this.PrismaService.tb_notation.create({
            data: {
                notation: data.notation,
                user: {
                    connect: { userId: data.userId },
                },
                spirit: {
                    connect: {
                        spiritId: data.spiritId
                    }
                },
            },
        })
    }

    async GetAllNotation() {
        return this.PrismaService.tb_notation.findMany();
    }

    async GetNotationByUser(userid: string) {
        return await this.PrismaService.tb_notation.findMany({
            where: {
                userId: userid
            },
            include: {
                spirit: true,
            }
        })

    }

    async UpdateNotation(data: NotationDTO, id: string) {
        return await this.PrismaService.tb_notation.updateMany({
            data: data,
            where: {
                id: id
            }

        })
    }

    async DeleteNotation(id: string) {
        return await this.PrismaService.tb_notation.deleteMany({
            where: {
                id: id
            }
        })
    }
}