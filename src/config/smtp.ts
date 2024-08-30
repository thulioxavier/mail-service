import nodemailer from "nodemailer";
import { env } from "../env";

export const transporter = nodemailer.createTransport({
  port: Number(env.SMTP_SENDINBLUE_PORT),
  host: env.SMTP_SENDINBLUE_SERVER,
  auth: {
    user: env.SMTP_SENDINBLUE_USERNAME,
    pass: env.SMTP_SENDINBLUE_PASSWORD,
  },
});
