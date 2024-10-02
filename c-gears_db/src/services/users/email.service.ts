import nodemailer from "nodemailer";
import SibApiV3Sdk from "sib-api-v3-sdk";
import path from "path";
import "dotenv/config";

const emailService = () => {
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = process.env.EMAIL_API_KEY;

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const sendEmail = async (
    to: string,
    subject: string,
    text: string,
    html?: string
  ) => {
    const mailOptions = {
      from: '"Gears Club" <no-reply@gearsclub.online>',
      to,
      subject,
      text,
      html,
      attachments: [
        {
          filename: "logo-gearsclub.png",
          path: path.join(__dirname, "../../../public/logo-gearsclub.png"),
          cid: "gearsclublogo",
        },
      ],
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
      return info;
    } catch (error) {
      console.log("Error sending email: " + error);
    }
  };

  return { sendEmail };
};
export default emailService;
