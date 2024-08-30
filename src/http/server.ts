import fastify from "fastify";
import cors from "@fastify/cors";
import { env } from "../env";
import { mailRoutes } from "./routes/mail.routes";

const app = fastify({
  logger: true,
});

app.register(cors, {
  origin: true,
});

app.register(mailRoutes);

app
  .listen({
    port: Number(env.PORT),
    host: "0.0.0.0",
  })
  .then((msg) => {
    console.log("HTTP Server Running [Mail Server] 🔥");
  });
