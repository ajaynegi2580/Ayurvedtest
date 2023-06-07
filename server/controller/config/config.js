import dotEnv from "dotenv";
dotEnv.config();
const config = {
  NODE_PRODUCTION: process.env.NODE_PRODUCTION || "development",
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/ayurveda",
  PORT: process.env.PORT || 8000,

  NODE_USER: process.env.NODEMAILER_USERNAME,
  NODE_PASS: process.env.NODEMAILER_PASSWORD,
  HOST: process.env.HOST,
  SERVICE: process.env.SERVICE,
  MAIL_PORT: process.env.MAIL_PORT,
  key_id: process.env.RAZORPAY_SEC_KEY,
  key_secret: process.env.RAZORPAY_SEC_ID,
};
export default config;
