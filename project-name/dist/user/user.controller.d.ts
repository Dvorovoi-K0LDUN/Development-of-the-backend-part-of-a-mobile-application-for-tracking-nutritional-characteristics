import { UserService } from './user.service';
import { User } from '@prisma/client';
import { UpdateUserDto } from '../auth/dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getMe(user: User): Promise<{
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        avatarPath: string;
        phone: string;
        waterIntakeGoal: number;
        currentWaterIntake: number;
    }>;
    updateProfile(userId: string, dto: UpdateUserDto): Promise<{
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        avatarPath: string;
        phone: string;
        waterIntakeGoal: number;
        currentWaterIntake: number;
    }>;
}
