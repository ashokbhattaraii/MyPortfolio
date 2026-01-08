import "dotenv/config";
import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};

export default config;
