
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(process.env.RESEND_API_KEY)


export const sendEmails = async (emailInfo, booking, user) => {
    try {
        if (!emailInfo) return null;

    console.log({
        booking, user, emailInfo
    })

    const response = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: user?.email,
        subject: 'hello world',
        html: '<p>it works!</p>',
      } );
    return response;
        
    } catch (error) {
        throw new Error("Something went wrong while sending email;")
    }
    
};