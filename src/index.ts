import { makeCombinedUser, makeCombinedUsers } from "./combinedUserFactory";

async function run() {
  console.log("\n=== Combined User Example ===");
  const combined = await makeCombinedUser();
  console.log(JSON.stringify(combined, null, 2));

  console.log("\n=== Bulk Combined Users (1) ===");
  const bulk = await makeCombinedUsers(1);
  console.log(JSON.stringify(bulk, null, 2));
}

run().catch((err) => {
  console.error("Error:", err);
});
