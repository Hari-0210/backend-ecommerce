const nodemailer = require("nodemailer");

function sendEmail(emailData) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "msmangadi.etagers@gmail.com",
        pass: "jiwwrdquymlbrbjw",
      },
    });

    const mailOptions = {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error occurred:", error);
        reject(error); // Reject the Promise with the error
      } else {
        console.log("Email sent:", info.response);
        resolve(info); // Resolve the Promise with the info object
      }
    });
  });
}

module.exports = sendEmail;
