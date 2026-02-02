import { transporter } from "./config";

const contactEmail = async (name, email, subject, message) => {
	try {
		const mailOptions = {
			from: process.env.FROM_EMAIL_ID,
			to: process.env.TO_EMAIL_ID,
			subject: "[Jobest] New Email.",
			html: `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>New Item Arrived.</title>
                    </head>
                    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f2f2f2;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e1e1e1;">
                            
                            <tr>
                                <td style="padding: 0 40px 20px;">
                                    <p style="font-size: 16px; color: #666666; margin-top: 10px;">Dear Admin,</p>
                                    <p style="font-size: 16px; color: #666666; margin-top: 10px;">New email from a visitor.</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 40px 20px;">
                                    <p style="font-size: 16px; color: #666666; margin-top: 10px;">Visitor Name:</p>
                                    <p style="font-size: 16px; color: #666666; margin-top: 10px;"> ${name}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 40px 20px;">
                                    <p style="font-size: 16px; color: #666666; margin-top: 10px;">Visitor Email:</p>
                                    <p style="font-size: 16px; color: #666666; margin-top: 10px;"> ${email}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 40px 20px;">
                                    <p style="font-size: 16px; color: #666666; margin-top: 10px;">Visitor Subject:</p>
                                    <p style="font-size: 16px; color: #666666; margin-top: 10px;"> ${subject}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 40px 20px;">
                                    <p style="font-size: 16px; color: #666666; margin-top: 10px;">Email Body:</p>
                                    <p style="font-size: 16px; color: #666666; margin-top: 10px;"> ${message}</p>
                                </td>
                            </tr>
                            
                            <tr>
                                <td style="padding: 0 40px 20px; text-align: center; background-color: #ffffff;">
                                    <p style="font-size: 14px; color: #999999; margin: 0;">
                                        You received this email because you signed up on our website. If you did not sign up, please ignore this email.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px 40px; text-align: center;">
                                    <hr style="border: none; border-top: 1px solid #dddddd; margin: 20px 0;">
                                    <p style="font-size: 12px; color: #999999; margin: 0;">
                                        &copy; ${new Date().getFullYear()} Jobest. All rights reserved.
                                    </p>
                                    <div style="margin: 20px 0;">
                                        <a href="#" style="display: inline-block; margin-right: 15px; color: #666666; text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1601733068/ESS/fb.png" alt="Facebook" width="24" height="24" style="display: block;">
                                        </a>
                                        <a href="#" style="display: inline-block; margin-right: 15px; color: #666666; text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1601733068/ESS/twitter.png" alt="Twitter" width="24" height="24" style="display: block;">
                                        </a>
                                        <a href="#" style="display: inline-block; margin-right: 15px; color: #666666; text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1601733068/ESS/linkedin.png" alt="Twitter" width="24" height="24" style="display: block;">
                                        </a>
                                        <a href="#" style="display: inline-block; margin-right: 15px; color: #666666; text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1601733068/ESS/dribbble.png" alt="Twitter" width="24" height="24" style="display: block;">
                                        </a>
                                        <a href="#" style="display: inline-block; margin-right: 15px; color: #666666; text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1601733068/ESS/instagram.png" alt="Twitter" width="24" height="24" style="display: block;">
                                        </a>
                                        <!-- Add more social icons here -->
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </body>
                </html>
            `,
		};

		await transporter.sendMail(mailOptions);
	} catch (error) {
		console.error("Error sending email:", error);
	}
};

export default contactEmail;
