import nodemailer from "nodemailer";
import { emailTEmplate } from "./emailTemplate";


const password = process.env.NODEMAILER_GOOGLE_KEY
const hostName = process.env.EMAIL_HOST_NAME
const hostEmail = process.env.HOST_EMAIL


const transporter = nodemailer.createTransport({
  host: hostName,
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: hostEmail,
    pass: password,
  },
});

// async..await is not allowed in global scope, must use a wrapper
export const sendMail = async ({booking, user}) => {

  try {
      // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Hotel Booking" <${hostEmail}>`, 
    to: "misukbd4@gmail.com", 
    subject: "Hotel booking confirmation.", 
    html: emailTEmplate({booking, user}), // html body
  });

  console.log("Message sent: %s", info);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  } catch (error) {
    console.log(error)
  }

}
