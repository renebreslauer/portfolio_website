if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const nodemailer = require('nodemailer')
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

// POST route from contact form
app.post('/contact', (req, res) => {

    // Instantiate the SMTP server

    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: `${process.env.GMAIL_USER}`,
        pass: `${process.env.GMAIL_PASS}`
      }
    })
  
    // Specify what the email will look like
    const mailOpts = {
      from: 'Your sender info here', // This is ignored by Gmail
      to: `${process.env.GMAIL_USER}`,
      subject: 'New message from contact form at Portfolio Site',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }
  
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        res.json('contact-failure') // Show a page indicating failure
      }
      else {
        res.json('contact-success') // Show a page indicating success
      }
    })
  })