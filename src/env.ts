import { z } from "zod";
import dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis do .env

const envSchema = z.object({
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  PORT: z.string(),
  SMTP_SENDINBLUE_SERVER: z.string(),
  SMTP_SENDINBLUE_PORT: z.string(),
  SMTP_SENDINBLUE_USERNAME: z.string(),
  SMTP_SENDINBLUE_PASSWORD: z.string(),
  SENDINBLUE_API_TOKE: z.string(),
});

export const env = envSchema.parse(process.env);
