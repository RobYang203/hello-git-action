require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.sendMail({
  to: '101m.tony.yang@gmail.com',
  subject: 'github error',
  html: `<div>Github action fail , 
  please check <a href='${process.env.ACTION_PATH}' target='_blank'>link</a></div>`,
});
