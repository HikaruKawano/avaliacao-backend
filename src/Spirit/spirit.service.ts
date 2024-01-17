import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/dataBase/prisma.servise';
import { SpiritDto } from 'src/dto/spirit.dto';

@Injectable()
export class SpiritService {

    constructor(private prismaService: PrismaService) { }


    async CreateSpirit(data: SpiritDto) {
        return this.prismaService.tb_Spirit.create({ data });
    }

    async GetAllSpirit() {
        return this.prismaService.tb_Spirit.findMany();
    }

    async GetSpiritByBrand(brand: string) {
        return this.prismaService.tb_Spirit.findMany({
            where: {
                brand: brand,
            }
        })
    }

    async PutSpirit(id: string, data: SpiritDto) {
        return this.prismaService.tb_Spirit.updateMany({
            data,
            where: {
                id: id,
            }
        })
    }

    async DeleteSpirit(id: string) {
        return this.prismaService.tb_Spirit.deleteMany({
            where: {
                id: id,
            }
        })
    }
}
