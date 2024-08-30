import { FastifyInstance } from "fastify";
import { sendMail } from "../controllers/send.controller";

export const mailRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/send", sendMail);
};
