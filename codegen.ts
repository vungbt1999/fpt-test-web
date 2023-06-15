import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_API_URL || "http://localhost:1337/graphql",
  documents: "./src/config/graphql-api/operations/**/*.graphql",
  generates: {
    "./src/config/graphql-api/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
