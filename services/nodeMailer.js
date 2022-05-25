var nodemailer = require('nodemailer');

const dispatchEmail = (userEmail, subject, emailContent, htmlContent, attachments = []) => {
  console.log(userEmail);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'priyen@upforcetech.com',
      pass: 'Upforce@2298'
    }
  });
  
  var mailOptions = {
    from: 'priyen@upforcetech.com',
    to: userEmail,
    subject: subject || `Account Registration for ${userEmail}`,
    text: emailContent,
    html: htmlContent,
    attachments: attachments,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}

const sendEmail = {
  dispatchEmail
};

module.exports = sendEmail;