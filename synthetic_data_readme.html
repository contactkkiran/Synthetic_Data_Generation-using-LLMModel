# Synthetic Data Generation using LLM Model

A TypeScript-based project that generates realistic synthetic user profiles by combining data from the Faker library with AI-generated content from a large language model (LLM).

## Overview

This project demonstrates how to create synthetic user data by leveraging two complementary approaches:

1. **Faker-based Generation**: Uses the `@faker-js/faker` library to generate structurally valid user information (names, emails, addresses, etc.)
2. **LLM-based Enrichment**: Augments the generated data with AI-generated biographical information and interests using Hugging Face's GPT-2 model via API

## Features

- **Synthetic User Profiles**: Generate realistic fake user data with complete personal information
- **Dual Data Source**: Combines deterministic Faker data with LLM-generated content
- **Batch Generation**: Support for generating single or multiple synthetic users
- **Type-Safe**: Built with TypeScript for better development experience and error catching
- **Modular Architecture**: Separate factories for different data generation strategies

## Project Structure

```
src/
├── index.ts                      # Main entry point and demo
├── syntheticUserFactory.ts       # Faker-based user generation
├── syntheticLLMFactory.ts        # LLM-based content generation
├── combinedUserFactory.ts        # Combined generation strategy
├── userApiDemo.js               # API demonstration
├── index.js                     # Compiled entry point
├── *.js                         # Compiled JavaScript files
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Synthetic_Data_Generation-using-LLMModel
```

2. Install dependencies:

```bash
npm install
```

## Configuration

### Environment Variables

Create a `.env` file in the project root with the following:

```
HF_API_KEY=your_huggingface_api_key_here
```

**Getting an API Key:**

1. Sign up at [Hugging Face](https://huggingface.co/)
2. Navigate to your account settings and generate a new API token
3. Add it to your `.env` file

## Usage

### Generate a Single Combined User

```typescript
import { makeCombinedUser } from "./src/combinedUserFactory";

const user = await makeCombinedUser();
console.log(user);
```

### Generate Multiple Users

```typescript
import { makeCombinedUsers } from "./src/combinedUserFactory";

const users = await makeCombinedUsers(10);
console.log(users);
```

### Generate Faker-Only Users

```typescript
import { makeUser, makeUsers } from "./src/syntheticUserFactory";

const user = makeUser();
const users = makeUsers(5);
```

### Generate LLM-Only Users

```typescript
import { makeLLMUser } from "./src/syntheticLLMFactory";

const user = await makeLLMUser();
console.log(user);
```

## Running the Project

### Development (TypeScript)

```bash
npm run dev
```

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Run Compiled Code

```bash
npm start
```

## Generated Data Structure

### User Profile

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-0123",
  "username": "johndoe42",
  "password": "SecurePass123!",
  "dateOfBirth": "1985-03-15T00:00:00.000Z",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001",
    "country": "United States"
  },
  "bio": "Software engineer passionate about technology",
  "interests": ["coding", "machine learning", "open source"]
}
```

## API Endpoints

The project can integrate with external APIs:

- **Hugging Face API**: Used for LLM-based content generation
  - Endpoint: `https://api-inference.huggingface.co/models/gpt2`
  - Authentication: Bearer token via `HF_API_KEY`

## Dependencies

### Main Dependencies

- **@faker-js/faker**: ^8.0.0 - Generate realistic fake data
- **node-fetch**: ^2.0.0 or ^3.0.0 - HTTP client for API calls
- **dotenv**: ^16.0.0 - Environment variable management

### Development Dependencies

- **TypeScript**: Language with static typing
- **@types/node**: Type definitions for Node.js

## Architecture

### Factory Pattern

The project implements the Factory pattern for flexible data generation:

1. **SyntheticUserFactory**: Base factory producing structured user data
2. **SyntheticLLMFactory**: Factory for LLM-generated content
3. **CombinedUserFactory**: Composite factory merging both strategies

### Data Flow

```
CombinedUserFactory
├── makeCombinedUser()
│   ├── SyntheticUserFactory.makeUser() → Faker data
│   └── SyntheticLLMFactory.makeLLMUser() → LLM data
│       └── Merge results
```

## Use Cases

- **Testing**: Generate realistic test data for applications
- **Machine Learning**: Create synthetic datasets for training
- **Demo Applications**: Populate applications with realistic sample data
- **Privacy**: Generate compliant test data without real user information
- **API Testing**: Load testing with diverse, realistic user profiles

## Limitations

- **LLM API**: Requires internet connection and valid Hugging Face API key
- **Rate Limiting**: Subject to Hugging Face API rate limits
- **Cost**: API calls may incur charges based on Hugging Face pricing
- **Variability**: LLM output may occasionally fail JSON parsing

## Future Enhancements

- [ ] Add support for additional LLM providers (OpenAI, Anthropic, etc.)
- [ ] Implement caching for LLM responses
- [ ] Add database integration for storing generated data
- [ ] Create CLI tool for easy batch generation
- [ ] Add validation and constraints for generated data
- [ ] Support for additional data types (products, organizations, etc.)

## Troubleshooting

### "HF_API_KEY not found"

- Ensure `.env` file exists in the project root
- Verify the API key is valid on Hugging Face

### "Failed to parse JSON from LLM"

- This is normal occasionally; the project handles it gracefully
- LLM output may not always be valid JSON

### API Rate Limit Errors

- Wait a few moments before retrying
- Consider implementing exponential backoff retry logic

## License

[Add your license information here]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Kiran Kumar

## Support

For issues or questions, please open an issue on the repository or contact the author.
