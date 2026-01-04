import { drizzle } from "drizzle-orm/mysql2";
import { envs } from "../../../shared/models/env.js";

export const db = drizzle(envs.DATABASE_URL);