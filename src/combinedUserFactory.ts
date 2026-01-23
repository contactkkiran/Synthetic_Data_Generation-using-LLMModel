import { makeUser } from "./syntheticUserFactory.js";
import { makeLLMUser } from "./syntheticLLMFactory.js";

export async function makeCombinedUser() {
  const fakerUser = makeUser();
  const llmUser = await makeLLMUser();

  return {
    ...fakerUser,
    bio: llmUser.bio || "Synthetic bio not available",
    interests: llmUser.interests || ["testing", "synthetic data"],
  };
}

export async function makeCombinedUsers(count: number) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(await makeCombinedUser());
  }
  return users;
}
