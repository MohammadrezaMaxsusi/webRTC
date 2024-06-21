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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_schema_1 = __importDefault(require("../users/user.schema"));
let Session = class Session extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Comment)("آیدی نشست"),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        // type: DataType.,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Session.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Comment)("آیدی نشست بالادست"),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Session.prototype, "pid", void 0);
__decorate([
    (0, sequelize_typescript_1.Comment)("نام نشست"),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Session.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Comment)("توضیحات نشست"),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Session.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Comment)("سازنده نشست"),
    (0, sequelize_typescript_1.ForeignKey)(() => user_schema_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Session.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_schema_1.default),
    __metadata("design:type", user_schema_1.default)
], Session.prototype, "user", void 0);
Session = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, paranoid: true, freezeTableName: true })
], Session);
exports.default = Session;