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
exports.MealService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let MealService = class MealService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        const { name, calories, proteins, fats, carbs, isPublic, glycemicIndex, glycemicLoad, breadUnits } = dto;
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
    async findAll(userId) {
        return this.prisma.meal.findMany({
            where: { userId }
        });
    }
    async findOne(id) {
        const meal = await this.prisma.meal.findUnique({ where: { id } });
        if (!meal)
            throw new common_1.NotFoundException('Meal not found');
        return meal;
    }
    async update(id, dto) {
        return this.prisma.meal.update({
            where: { id },
            data: dto
        });
    }
    async remove(id) {
        return this.prisma.meal.delete({
            where: { id }
        });
    }
};
exports.MealService = MealService;
exports.MealService = MealService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MealService);
//# sourceMappingURL=meal.service.js.map