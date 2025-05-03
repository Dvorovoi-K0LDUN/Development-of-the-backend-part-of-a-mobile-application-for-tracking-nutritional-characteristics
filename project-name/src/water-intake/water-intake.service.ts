import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateWaterIntakeDto } from '../auth/dto/create-water-intake.dto';
import { format } from 'date-fns';  // Импортируем функцию форматирования из date-fns

@Injectable()
export class WaterIntakeService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateWaterIntakeDto) {
    const date = dto.date ? new Date(dto.date) : new Date();
    const finalDate = dto.date ? new Date(dto.date) : new Date();

    const isoDate = finalDate.toISOString();

    return this.prisma.waterIntakeLog.create({
      data: {
        userId,
        date: isoDate,
        waterIntake: dto.waterIntake,
      },
    });
  }

  async findAll(userId: string) {
    const waterLogs = await this.prisma.waterIntakeLog.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    });


    return waterLogs.map(log => {
        return {
        ...log,
        date: format(new Date(log.date), 'dd/MM/yyyy HH:mm'), 
        };
    });
    }
}
