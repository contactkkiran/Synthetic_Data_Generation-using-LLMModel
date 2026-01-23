"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combinedUserFactory_1 = require("./combinedUserFactory");
async function run() {
    console.log("\n=== Combined User Example ===");
    const combined = await (0, combinedUserFactory_1.makeCombinedUser)();
    console.log(JSON.stringify(combined, null, 2));
    console.log("\n=== Bulk Combined Users (1) ===");
    const bulk = await (0, combinedUserFactory_1.makeCombinedUsers)(1);
    console.log(JSON.stringify(bulk, null, 2));
}
run().catch((err) => {
    console.error("Error:", err);
});
