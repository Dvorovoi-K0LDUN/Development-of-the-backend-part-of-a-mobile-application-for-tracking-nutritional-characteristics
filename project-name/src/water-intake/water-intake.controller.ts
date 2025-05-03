import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { WaterIntakeService } from './water-intake.service';
import { CreateWaterIntakeDto } from '../auth/dto/create-water-intake.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Auth()
@Controller('water-intake')
export class WaterIntakeController {
  constructor(private readonly waterIntakeService: WaterIntakeService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@CurrentUser('id') userId: string, @Body() dto: CreateWaterIntakeDto) {
    return this.waterIntakeService.create(userId, dto);
  }

  @Get()
  findAll(@CurrentUser('id') userId: string) {
    return this.waterIntakeService.findAll(userId);  // Возвращаем данные с отформатированными датами
  }
}
