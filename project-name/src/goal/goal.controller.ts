import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe, Put, Delete } from '@nestjs/common';
import { GoalService } from './goal.service';
import { CreateGoalDto } from '../auth/dto/create-goal.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Auth()
@Controller('goals')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@CurrentUser('id') userId: string, @Body() dto: CreateGoalDto) {
    return this.goalService.create(userId, dto);
  }

  @Get()
  findAll(@CurrentUser('id') userId: string) {
    return this.goalService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser('id') userId: string) {
    return this.goalService.findOne(id, userId);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @CurrentUser('id') userId: string, @Body() dto: CreateGoalDto) {
    return this.goalService.update(id, userId, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser('id') userId: string) {
    return this.goalService.remove(id, userId);
  }
}
