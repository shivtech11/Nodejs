var nodemailer = require('nodemailer');

var fs = require('fs');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourmail@gmail.com',
    pass: 'password'
  }
});

//for single user
// var mailOptions = {
//   from: 'yourmail@gmail.com',
//   to: 'friendmail@gmail.com',
//   subject: 'Sending Email using My Node.js App',
//   //text: 'That was easy! Good morning love'
//    html: '<h1>Welcome!!</h1><h3>love</h3><p>That was easy!</p>'
// };

//for multiple user
// var mailOptions = {
//   from: 'yourmail@gmail.com',
//   to: 'friendmail@gmail.com,friend2@gmail.com',
//   subject: 'Sending Email using My Node.js App',
//   //text: 'That was easy! Good morning love'
//    html: '<h1>Welcome!!</h1><h3>love</h3><p>That was easy!</p>'
// };


//using read file send emails by fetching emails from csv/text file
//using this we send  a single mail to the group of persons not personally
/*
fs.readFile('mail.txt', 'utf8', function(err, data) {
var mailOptions = {
  from: 'yourmailil.com',
  to: data,
  subject: 'Sending Email using Node.js',
  text: 'for loop using file'
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);

  }
});

 });

*/


//sending mails one by one mail id fetching from csv file
fs.readFile('mail.txt', 'utf8', function(err, data) {
          var email=[];
          for(var i=0;i<data.length;i++){
              if(data[i]!=","){
                  email+=data[i]
                }
              else{
                  var mailOptions = {
                                      from: 'shivam9***0@gmail.com',
                                      to: email,
                                      subject: 'Sending Email using Node.js',
                                      text: 'using one-one function file'
                                    }

                          transporter.sendMail(mailOptions, function(error, info){
                            if (error) {
                              console.log(error);
                            } else {
                              console.log('Email sent: ' + info.response);
                            }
                          });

             // null the array
                email="";
               }
          }
});
