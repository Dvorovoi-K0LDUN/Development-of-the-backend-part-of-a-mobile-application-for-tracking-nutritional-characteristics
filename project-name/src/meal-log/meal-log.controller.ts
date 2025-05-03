import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { MealLogService } from './meal-log.service';
import { CreateMealLogDto } from '../auth/dto/create-meal-log.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Auth()
@Controller('meal-logs')
export class MealLogController {
  constructor(private readonly mealLogService: MealLogService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@CurrentUser('id') userId: string, @Body() dto: CreateMealLogDto) {
    return this.mealLogService.create(userId, dto);
  }

  @Get()
  findAll(@CurrentUser('id') userId: string) {
    return this.mealLogService.findAll(userId);
  }
}
