import { transporter } from "../config/smtp";
import { ResponseEventsProps } from "../error/error";

export interface sendMailProps {
  html: string;
  variables: Record<string, unknown>;
  to: { name: string; address: string }[];
  from: { name: string; address: string };
  subject: string;
  attachments?: {
    filename: string;
    path: string;
    cid: string;
  }[];
}

export const sendMail = async (
  data: sendMailProps
): Promise<ResponseEventsProps> => {
  try {
    await transporter.sendMail(data);
    return {
      data: {
        msg: "Send mail successfu! 📧",
        metadata: data,
      },
    };
  } catch (error) {
    return { error: error };
  }
};
