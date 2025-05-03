import { WaterIntakeService } from './water-intake.service';
import { CreateWaterIntakeDto } from '../auth/dto/create-water-intake.dto';
export declare class WaterIntakeController {
    private readonly waterIntakeService;
    constructor(waterIntakeService: WaterIntakeService);
    create(userId: string, dto: CreateWaterIntakeDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        waterIntake: number;
        date: Date;
    }>;
    findAll(userId: string): Promise<{
        date: string;
        id: string;
        createdAt: Date;
        userId: string;
        waterIntake: number;
    }[]>;
}
