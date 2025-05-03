import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMealLogDto } from '../auth/dto/create-meal-log.dto';

@Injectable()
export class MealLogService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateMealLogDto) {
    const meal = await this.prisma.meal.findUnique({ where: { id: dto.mealId } });
    if (!meal) throw new NotFoundException('Meal not found');

    const factor = dto.amount;
    const totalCalories = meal.calories * factor;
    const totalProteins = meal.proteins * factor;
    const totalFats = meal.fats * factor;
    const totalCarbs = meal.carbs * factor;

    return this.prisma.mealLog.create({
      data: {
        userId,
        mealId: dto.mealId,
        mealTime: new Date(dto.mealTime),
        amount: dto.amount,
        breadUnits: dto.breadUnits,
        waterIntake: dto.waterIntake,
        totalCalories,
        totalProteins,
        totalFats,
        totalCarbs,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.mealLog.findMany({
      where: { userId },
      orderBy: { mealTime: 'desc' },
      include: { meal: true },
    });
  }
}
