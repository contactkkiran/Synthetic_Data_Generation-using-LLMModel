"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCombinedUser = makeCombinedUser;
exports.makeCombinedUsers = makeCombinedUsers;
const syntheticUserFactory_js_1 = require("./syntheticUserFactory.js");
const syntheticLLMFactory_js_1 = require("./syntheticLLMFactory.js");
async function makeCombinedUser() {
    const fakerUser = (0, syntheticUserFactory_js_1.makeUser)();
    const llmUser = await (0, syntheticLLMFactory_js_1.makeLLMUser)();
    return {
        ...fakerUser,
        bio: llmUser.bio || "Synthetic bio not available",
        interests: llmUser.interests || ["testing", "synthetic data"],
    };
}
async function makeCombinedUsers(count) {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push(await makeCombinedUser());
    }
    return users;
}
