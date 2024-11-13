require('dotenv').config();

import User from '.././models/user';

import send from './send';

const sendPasswordResetEmail = ({ email, firstname = "User", userid = null, resetToken = null }) => {
    try {
        const platformname = process.env.PLATFORM_NAME;
        const baseurl = process.env.baseurl;

        const messageContent = resetToken
            ? `<p>We received a request to reset your password for your ${platformname} account. Please click the link below to create a new password:</p>
               <p><a href="${baseurl}/passwordrecovery/resetpassword?user=${userid}&resetToken=${resetToken}">Reset Password</a></p>
               <p>This link is valid for a limited time. If you did not request a password reset, you can safely ignore this email.</p>`
            : `<p>Welcome to ${platformname}! We're thrilled to have you join our community. Please follow the link below to set up your account:</p>
               <p><a href="${baseurl}/auth/accountsetup?email=${encodeURIComponent(email)}">Complete Account Set up</a></p>`;

        const template = {
            giver: `support@${process.env.PLATFORM}`,
            receiver: email,
            subject: `Reset Your Password - ${platformname}`,
            message: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Password Reset for ${platformname}</title>
                    <style>
                        @font-face {
                            font-family: 'Inter';
                            src: url(data:font/woff2;base64,BASE64_ENCODED_INTER_FONT_DATA_HERE) format('woff2');
                        }
                        @font-face {
                            font-family: 'Poppins';
                            src: url(data:font/woff2;base64,BASE64_ENCODED_POPPINS_FONT_DATA_HERE) format('woff2');
                        }
                        body {
                            font-family: 'Inter', Arial, sans-serif;
                            background-color: #f5f5f5;
                            margin: 0;
                            padding: 0;
                        }
                        p, a {
                            font-size: 14px;
                            color: #333;
                        }
                        .message {
                            padding: 30px;
                        }
                    </style>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Poppins:wght@100;200;300;400;500;600&display=swap">
                </head>
                <body class="message">
                    <p>Dear ${firstname},</p>
                    ${messageContent}
                    <p>Thank you,<br>The ${platformname} Support Team</p>
                </body>
            </html>
            `
        };

        send({ template })
            .then(async result => {
                console.log("Password reset email sent successfully:", result);

                try {
                    if (userid) {
                        try {
                            await User.findByIdAndUpdate(
                                userid,
                                { resetToken, resetTokenExpiry: Date.now() + 3600000 }, // 1-hour expiry
                                { new: true }
                            );
                        } catch (err) {
                            console.error("Error updating user with reset token:", err);
                        }
                    }
                } catch (err) {
                    console.error(err, 'Error updating user with reset token');
                }

            })
            .catch(error => {
                console.error("Error sending password reset email:", error.message);
            });
    } catch (error) {
        console.error("General error in sendPasswordResetEmail:", error.message);
    }
};

export default sendPasswordResetEmail;