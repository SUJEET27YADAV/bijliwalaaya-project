// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC21924433f5df0306014f10ecd99843ae'; //process.env.TWILIO_ACCOUNT_SID;
const authToken = '88feda91812a97557fc9ace809d9959f'; //process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is a message from BijliWalaAya.in',
     from: '+16027141694',
     to: '+919999239307'
   })
  .then(message => console.log(message.sid));
