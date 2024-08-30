import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { SendMailService } from "../../services/send-mail.service";

export const sendMail = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const addressSchema = z.object({
    name: z.string(),
    address: z.string(),
  });

  const schemaSendMail = z.object({
    html: z.string(),
    variables: z.record(z.unknown()),
    to: z.array(addressSchema),
    from: addressSchema,
    subject: z.string(),
  });

  const { from, html, subject, to, variables } = schemaSendMail.parse(
    request.body
  );

  const result = await SendMailService({
    from,
    html,
    subject,
    to,
    variables,
  });

  return reply.send(result);
};
