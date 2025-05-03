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
exports.WaterIntakeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const date_fns_1 = require("date-fns");
let WaterIntakeService = class WaterIntakeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        const date = dto.date ? new Date(dto.date) : new Date();
        const finalDate = dto.date ? new Date(dto.date) : new Date();
        const isoDate = finalDate.toISOString();
        return this.prisma.waterIntakeLog.create({
            data: {
                userId,
                date: isoDate,
                waterIntake: dto.waterIntake,
            },
        });
    }
    async findAll(userId) {
        const waterLogs = await this.prisma.waterIntakeLog.findMany({
            where: { userId },
            orderBy: { date: 'desc' },
        });
        return waterLogs.map(log => {
            return {
                ...log,
                date: (0, date_fns_1.format)(new Date(log.date), 'dd/MM/yyyy HH:mm'),
            };
        });
    }
};
exports.WaterIntakeService = WaterIntakeService;
exports.WaterIntakeService = WaterIntakeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WaterIntakeService);
//# sourceMappingURL=water-intake.service.js.map