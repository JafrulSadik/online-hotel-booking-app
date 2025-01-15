import nodemailer from "nodemailer";
import { emailTEmplate } from "./emailTemplate";


const password = process.env.NODEMAILER_GOOGLE_KEY
const hostName = process.env.EMAIL_HOST_NAME
const hostEmail = process.env.HOST_EMAIL


const transporter = nodemailer.createTransport({
  host: hostName,
  port: 465,
  secure: true, 
  auth: {
    user: hostEmail,
    pass: password,
  },
});

export const sendMail = async ({booking, user}) => {

  try {
  const info = await transporter.sendMail({
    from: `"Hotel Booking" <${hostEmail}>`, 
    to: user?.email,
    subject: "Hotel booking confirmation.", 
    html: emailTEmplate({booking, user}),
  });
  } catch (error) {
    return ""
  }

}
