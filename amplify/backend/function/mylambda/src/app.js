/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer')
var coars = require('cors')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(awsServerlessExpressMiddleware.eventContext())


// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/', function(req, res) {
  res.json({success: 'get call succeed!', url: req.url});
});



/****************************
* Example post method *
****************************/

app.post('/api/v1', function(req, res) {
    let data = req.body;
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});



app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 4444;


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 4444');
});

app.get('/', (req, res) => {
  res.json(req.apiGateway.eventM
    );
})

app.post('/api/v1', (req,res) => {
  let data = req.body;


let smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
    user: `${process.env.GMAIL_USER}`,
    pass: `${process.env.GMAIL_PASS}`
  }
});

let mailOptions = {
  from: data.email,
  to: `${process.env.GMAIL_USER}`,
  subject: 'Portfolio Inquiry',
  html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
}


smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});

})
