import { Module } from '@nestjs/common';
import { MealLogService } from './meal-log.service';
import { MealLogController } from './meal-log.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MealLogController],
  providers: [MealLogService, PrismaService]
})
export class MealLogModule {}
