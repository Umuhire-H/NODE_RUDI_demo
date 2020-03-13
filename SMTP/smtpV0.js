// npm install nodemailer
// create an account at https://mailtrap.io/ (fake SMTP server for testing purpose !)

const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "::::::",
      pass: "::::::"
    }
  });

const message = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'rudi.giot@gmail.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};

transport.sendMail(message, function(err, info) {
    if (err) {
      console.log("Error : " + err)
    } else {
      console.log("Sended : " + info);
    }
});