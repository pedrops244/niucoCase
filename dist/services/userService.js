"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAndTransformUsers = void 0;
const axios_1 = __importDefault(require("axios"));
const dateUtils_1 = require("../utils/dateUtils");
const emailUtils_1 = require("../utils/emailUtils");
const fetchAndTransformUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${process.env.API_URL}/users`);
        if (!response.data || !Array.isArray(response.data)) {
            throw new Error('Invalid response format from API');
        }
        return response.data.map((user) => ({
            id: user.id,
            name: user.name,
            email: (0, emailUtils_1.obfuscateEmail)(user.email),
            lastActivity: (0, dateUtils_1.formatUnixEpochToISO)(user.last_activity),
            isPaying: user.status === 'enabled' &&
                (user.role === 'editor' || user.role === 'admin'),
            isActive: user.status === 'enabled',
        }));
    }
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
});
exports.fetchAndTransformUsers = fetchAndTransformUsers;
