Synthetic Data Generation using LLM Model
A TypeScript-based project that generates realistic synthetic user profiles by combining data from the Faker library with AI-generated content from a large language model (LLM).

Overview
This project demonstrates how to create synthetic user data by leveraging two complementary approaches:

Faker-based Generation: Generates structurally valid user information.
LLM-based Enrichment: Uses Hugging Face GPT-2 to generate bios and interests.
Features
Synthetic user profile generation
Faker + LLM hybrid approach
Batch user generation
Type-safe TypeScript implementation
Modular factory-based architecture
Project Structure
src/
├── index.ts
├── syntheticUserFactory.ts
├── syntheticLLMFactory.ts
├── combinedUserFactory.ts
├── userApiDemo.js
├── index.js
Installation
git clone <repository-url>
cd Synthetic_Data_Generation-using-LLMModel
npm install
Configuration
Create a
.env
file:

HF_API_KEY=your_huggingface_api_key_here
Usage
Generate a Combined User
import { makeCombinedUser } from "./src/combinedUserFactory";
const user = await makeCombinedUser();
Generate Multiple Users
import { makeCombinedUsers } from "./src/combinedUserFactory";
const users = await makeCombinedUsers(10);
Generated User Example
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "bio": "Software engineer passionate about technology",
  "interests": ["coding", "machine learning"]
}
Architecture
CombinedUserFactory
├── Faker Data
└── LLM Data
    └── Merged Output
Use Cases
Automation testing
ML training datasets
Demo and sandbox environments
Privacy-safe testing
Limitations
Requires Hugging Face API key
Subject to API rate limits
LLM output may vary
Future Enhancements
Support additional LLM providers
Introduce caching and retries
CLI tooling
Schema validation
Author: Kiran Kumar

For issues, please raise a GitHub issue.
