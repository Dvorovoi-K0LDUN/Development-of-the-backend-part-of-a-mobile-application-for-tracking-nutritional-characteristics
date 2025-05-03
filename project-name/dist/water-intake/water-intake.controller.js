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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterIntakeController = void 0;
const common_1 = require("@nestjs/common");
const water_intake_service_1 = require("./water-intake.service");
const create_water_intake_dto_1 = require("../auth/dto/create-water-intake.dto");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../auth/decorators/user.decorator");
let WaterIntakeController = class WaterIntakeController {
    waterIntakeService;
    constructor(waterIntakeService) {
        this.waterIntakeService = waterIntakeService;
    }
    create(userId, dto) {
        return this.waterIntakeService.create(userId, dto);
    }
    findAll(userId) {
        return this.waterIntakeService.findAll(userId);
    }
};
exports.WaterIntakeController = WaterIntakeController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_water_intake_dto_1.CreateWaterIntakeDto]),
    __metadata("design:returntype", void 0)
], WaterIntakeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WaterIntakeController.prototype, "findAll", null);
exports.WaterIntakeController = WaterIntakeController = __decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Controller)('water-intake'),
    __metadata("design:paramtypes", [water_intake_service_1.WaterIntakeService])
], WaterIntakeController);
//# sourceMappingURL=water-intake.controller.js.map