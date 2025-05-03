import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMealDto } from '../auth/dto/create-meal.dto';
import { UpdateMealDto } from '../auth/dto/update-meal.dto';
import { clearUndefined } from '../utils/clearUndefined';

@Injectable()
export class MealService {
    constructor(private prisma: PrismaService) {}

    async create(userId: string, dto: CreateMealDto) {
        const {
          name,
          calories,
          proteins,
          fats,
          carbs,
          isPublic,
          glycemicIndex,
          glycemicLoad,
          breadUnits
        } = dto;
      
        return this.prisma.meal.create({
          data: {
            userId,
            name,
            calories,
            proteins,
            fats,
            carbs,
            isPublic,
            ...(glycemicIndex !== undefined && { glycemicIndex }),
            ...(glycemicLoad !== undefined && { glycemicLoad }),
            ...(breadUnits !== undefined && { breadUnits })
          }
        });
      }
      
        

    async findAll(userId: string) {
    return this.prisma.meal.findMany({
        where: { userId }
    });
    }

    async findOne(id: string) {
    const meal = await this.prisma.meal.findUnique({ where: { id } });
    if (!meal) throw new NotFoundException('Meal not found');
    return meal;
    }

    async update(id: string, dto: UpdateMealDto) {
    return this.prisma.meal.update({
        where: { id },
        data: dto
    });
    }

    async remove(id: string) {
    return this.prisma.meal.delete({
        where: { id }
    });
    }
}
