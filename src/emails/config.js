import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
	host: "email-smtp.ap-southeast-1.amazonaws.com",
	port: 465, // SMTP port (TLS)
	secure: true, // Use TLS
	auth: {
		user: process.env.AWS_SES_USER, // Use from Amazon Credentials
		pass: process.env.AWS_SES_PASSWORD, // Use from Amazon Credentials
	},
});
