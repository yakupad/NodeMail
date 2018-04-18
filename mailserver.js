var http = require('http');

var nodemailer = require('nodemailer');
var express = require('express');
var app = express();

app.get('/', function (request, response) {
    console.log("Hello World");
    response.send("<marquee>E-Postanız Gönderiliyor...</marquee>");
    var user = request.query.user;
    var pass = request.query.pass;
    var from = request.query.from;
    var to = request.query.to;
    var subject = request.query.subject;
    var text = request.query.text;
    sendMail(user,pass,from,to,subject,text)
})

app.listen(process.env.PORT || 8093, () => console.log('All is ok!'));

function sendMail(_user,_pass,_from,_to,_subject,_text){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            pass: pass
        }
    });

    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}