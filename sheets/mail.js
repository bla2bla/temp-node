var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kaneda2test@gmail.com',
    pass: 'mssutmjkccjkmxkg'
  }
});

var mailOptions = {
  from: 'kaneda2test@gmail.com',
  to: 'kaneda1test@gmail.com, kaneda2test@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>',    // tkhyr html 
 // text: 'fzhr!'                                     //tkhyr text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 