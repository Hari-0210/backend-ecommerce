var express = require('express');
const sendEmail = require('../utils/sendEmail');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendMail', function(req, res, next) {
  // Extract the necessary parameters from the request body
  const { to, subject, text } = req.body;
  console.log(req.body);
  // Create an object with the email data
  const emailData = {
    from: "msmangadi.etagers@gmail.com",
    to,
    subject,
    text
  };

  // Call the sendEmail function with the email data
  sendEmail(emailData)
    .then(() => {
      // Email sent successfully
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch(error => {
      // Error occurred while sending email
      console.error("Failed to send email:", error);
      res.status(500).json({ error: "Failed to send email" });
    });
});

module.exports = router;
