import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from '../auth/dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
    return user;
    }

    async updateProfile(userId: string, dto: UpdateUserDto) {
    return this.prisma.user.update({
        where: { id: userId },
        data: dto,
    });
    }
}
