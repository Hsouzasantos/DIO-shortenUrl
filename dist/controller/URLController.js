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
const Constants_1 = require("config/Constants");
const express_1 = require("express");
const shortid_1 = __importDefault(require("shortid"));
class URLController {
    shorten(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { originURL } = req.body;
            const hash = shortid_1.default.generate();
            const shortURl = `${Constants_1.config.API_URL}/${hash}`;
            express_1.response.json({ originURL, hash, shortURl });
        });
    }
    redirect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = req.params;
            const url = {
                originURL: 'https://cloud.mongodb.com/v2/5r8c9c87899aea3b2#clusters',
                hash: 'CUSD3DgEB',
                shortURl: 'http://localhost:5000/CUSD3DgEB',
            };
            express_1.response.redirect(url.originURL);
        });
    }
}
exports.default = URLController;
//# sourceMappingURL=URLController.js.map