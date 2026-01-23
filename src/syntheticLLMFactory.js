"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLLMUser = makeLLMUser;
const node_fetch_1 = __importDefault(require("node-fetch"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const HF_API_URL = "https://api-inference.huggingface.co/models/gpt2";
const HF_API_KEY = process.env.HF_API_KEY;
async function makeLLMUser() {
    var _a;
    const prompt = `
Generate a fake user profile as JSON with fields:
firstName, lastName, email, bio, interests (array of strings),
`;
    const res = await (0, node_fetch_1.default)(HF_API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${HF_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
    });
    const data = await res.json();
    const text = ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.generated_text) || "";
    try {
        const jsonStart = text.indexOf("{");
        const jsonEnd = text.lastIndexOf("}");
        const jsonString = text.slice(jsonStart, jsonEnd + 1);
        return JSON.parse(jsonString);
    }
    catch {
        return { error: "Could not parse JSON" };
    }
}
