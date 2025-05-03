"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalModule = void 0;
const common_1 = require("@nestjs/common");
const goal_service_1 = require("./goal.service");
const goal_controller_1 = require("./goal.controller");
const prisma_service_1 = require("../prisma.service");
let GoalModule = class GoalModule {
};
exports.GoalModule = GoalModule;
exports.GoalModule = GoalModule = __decorate([
    (0, common_1.Module)({
        controllers: [goal_controller_1.GoalController],
        providers: [goal_service_1.GoalService, prisma_service_1.PrismaService],
    })
], GoalModule);
//# sourceMappingURL=goal.module.js.map