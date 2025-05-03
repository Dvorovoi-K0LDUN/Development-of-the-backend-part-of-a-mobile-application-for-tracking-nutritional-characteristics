import { Body, Controller, Get, Post, Put, Delete, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto } from '../auth/dto/create-meal.dto';
import { UpdateMealDto } from '../auth/dto/update-meal.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Auth()
@Controller('meals')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@CurrentUser('id') userId: string, @Body() dto: CreateMealDto) {
    return this.mealService.create(userId, dto);
  }

  @Get()
  findAll(@CurrentUser('id') userId: string) {
    return this.mealService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMealDto) {
    return this.mealService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealService.remove(id);
  }
}
