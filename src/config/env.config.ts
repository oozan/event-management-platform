import * as dotenv from 'dotenv';
dotenv.config();

export default {
  port: parseInt(process.env.PORT || '3000'),
  dbConnection: process.env.DB_CONNECTION || '',
  jwtSecret: process.env.JWT_SECRET || 'default_secret',
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '2525'),
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
};
