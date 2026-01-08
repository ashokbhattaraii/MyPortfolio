import "dotenv/config";
import type { Config } from "drizzle-kit";

const config = {
  schema: "./src/schema.ts",
  driver: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};

export default config;
