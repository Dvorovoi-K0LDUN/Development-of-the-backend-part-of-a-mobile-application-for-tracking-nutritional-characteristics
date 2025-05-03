"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealLogService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let MealLogService = class MealLogService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        const meal = await this.prisma.meal.findUnique({ where: { id: dto.mealId } });
        if (!meal)
            throw new common_1.NotFoundException('Meal not found');
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
    async findAll(userId) {
        return this.prisma.mealLog.findMany({
            where: { userId },
            orderBy: { mealTime: 'desc' },
            include: { meal: true },
        });
    }
};
exports.MealLogService = MealLogService;
exports.MealLogService = MealLogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MealLogService);
//# sourceMappingURL=meal-log.service.js.map