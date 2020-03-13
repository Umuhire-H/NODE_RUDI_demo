// npm install nodemailer
// create an account at https://mailtrap.io/ (fake SMTP server for testing purpose !)

const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f5a10a24e3d40f",
      pass: "a643031b4fedd9"
    }
  });

const message = {
    from: 'rudi.giot@gmail.com', // Sender address
    to: 'rudi.giot@gmail.com',         // List of recipients
    subject: 'This is a test', // Subject line
    text: 'Here is the content of the mail' // Plain text body
};

transport.sendMail(message, function(err, info) {
    if (err) {
      console.log("Error : " + err);
    } else {
      console.log("Sended : " + info);
    }
});