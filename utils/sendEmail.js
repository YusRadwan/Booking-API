// Import
    const nodemailer = require('nodemailer');

// Helper Function Send Email
    const sendEmail = async (options) => {
        // Transport Email
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                // secure: false, // if use Gmail true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });

        // Maill Options
            const maillOptions = {
                from: `"Booking API" ${process.env.SMTP_USER}`,
                to: options.email,
                subject: options.subject,
                text: options.message
            };

            await transporter.sendMail(maillOptions);
    }
    
module.exports = sendEmail;