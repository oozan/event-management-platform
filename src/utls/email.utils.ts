import * as nodemailer from 'nodemailer';
import envConfig from '../config/env.config';

export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html?: string,
) {
  const transporter = nodemailer.createTransport({
    host: envConfig.smtp.host,
    port: envConfig.smtp.port,
    auth: {
      user: envConfig.smtp.user,
      pass: envConfig.smtp.pass,
    },
  });

  await transporter.sendMail({
    from: '"Event Management Platform" <no-reply@eventplatform.com>',
    to,
    subject,
    text,
    html,
  });
}
