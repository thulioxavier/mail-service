import { sendMail, sendMailProps } from "../transporter/transporter";

export const SendMailService = async (data: sendMailProps) => {
  const result = await sendMail(data);

  return result;
};
