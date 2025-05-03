import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGoalDto } from '../auth/dto/create-goal.dto';

@Injectable()
export class GoalService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateGoalDto) {
    return this.prisma.goal.create({
      data: {
        userId,
        ...dto,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.goal.findMany({
      where: { userId },
      orderBy: { startDate: 'desc' },
    });
  }

  async findOne(id: string, userId: string) {
    const goal = await this.prisma.goal.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!goal || goal.userId !== userId) {
      throw new NotFoundException('Goal not found or access denied');
    }

    return goal;
  }

  async update(id: string, userId: string, dto: CreateGoalDto) {
    const goal = await this.findOne(id, userId);
  
    // Передаем только данные, относящиеся к цели
    const { startDate, endDate, targetCalories, targetProteins, targetFats, targetCarbs, targetWaterIntake, targetBreadUnits, currentWeight, targetWeight, activityLevel } = dto;
  
    return this.prisma.goal.update({
      where: { id },
      data: {
        startDate,
        endDate,
        targetCalories,
        targetProteins,
        targetFats,
        targetCarbs,
        targetWaterIntake,
        targetBreadUnits,
        currentWeight,
        targetWeight,
        activityLevel,
        userId, // передаем только userId для связи
      },
    });
  }
  
  

  async remove(id: string, userId: string) {
    const goal = await this.findOne(id, userId);
    return this.prisma.goal.delete({
      where: { id },
    });
  }
}
