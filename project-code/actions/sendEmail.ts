"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "mannvora19683@gmail.com", 
        pass: process.env.GMAIL_APP_PASSWORD_KEY || "", 
    },
});

export const sendEmail = async (formData: FormData): Promise<void> => {
    console.log("Running on server");

    const senderEmail = formData.get("senderEmail")?.toString() || "";
    const senderMessage = formData.get("senderMessage")?.toString() || "";

    if (!senderEmail || !senderMessage) {
        console.error("Missing required fields: senderEmail or senderMessage");
        return;
    }

    const mailOptions = {
        from: senderEmail,
        to: "mannvora19683@gmail.com",
        subject: "Hello",
        text: senderMessage,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", info.response);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
};
