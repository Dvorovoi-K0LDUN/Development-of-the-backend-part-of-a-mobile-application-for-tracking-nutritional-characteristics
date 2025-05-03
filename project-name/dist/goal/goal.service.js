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
exports.GoalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let GoalService = class GoalService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        return this.prisma.goal.create({
            data: {
                userId,
                ...dto,
            },
        });
    }
    async findAll(userId) {
        return this.prisma.goal.findMany({
            where: { userId },
            orderBy: { startDate: 'desc' },
        });
    }
    async findOne(id, userId) {
        const goal = await this.prisma.goal.findUnique({
            where: { id },
            include: { user: true },
        });
        if (!goal || goal.userId !== userId) {
            throw new common_1.NotFoundException('Goal not found or access denied');
        }
        return goal;
    }
    async update(id, userId, dto) {
        const goal = await this.findOne(id, userId);
        const { startDate, endDate, targetCalories, targetProteins, targetFats, targetCarbs, targetWaterIntake, targetBreadUnits, currentWeight, targetWeight, activityLevel } = dto;
        return this.prisma.goal.update({
            where: { id },
            data: {
                startDate,
                endDate,
                targetCalories,
                targetProteins,
                targetFats,
                targetCarbs,
                targetWaterIntake,
                targetBreadUnits,
                currentWeight,
                targetWeight,
                activityLevel,
                userId,
            },
        });
    }
    async remove(id, userId) {
        const goal = await this.findOne(id, userId);
        return this.prisma.goal.delete({
            where: { id },
        });
    }
};
exports.GoalService = GoalService;
exports.GoalService = GoalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GoalService);
//# sourceMappingURL=goal.service.js.map