var http = require('http');

var nodemailer = require('nodemailer');
var express = require('express');
var app = express();

app.get('/', function (request, response) {
    console.log("Gönderiliyor...");
    response.send("<p><b>Örnek Kullanım Şekli:</b><br> http://localhost:8080/?user=EPOSTAHESABINIZ&pass=EPOSTAHESABINIZINŞİFRESİ&to=GÖNDERİLECEKEPOSTAADRESİ&subject=EPOSTAKONUSU&text=EPOSTAİÇERİĞİ</p>");
    var user = request.query.user;
    var pass = request.query.pass;
    var to = request.query.to;
    var subject = request.query.subject;
    var text = request.query.text;
    sendMail(user,pass,to,subject,text)
})

function sendMail(_user,_pass,_to,_subject,_text){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: _user,
            pass: _pass
        }
    });

    var mailOptions = {
        from: _user,
        to: _to,
        subject: _subject,
        text: _text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('E-Posta Gönderildi: ' + info.response);
        }
    });
}

app.listen(process.env.PORT || 8080, () => console.log('E-Posta Sunucunuz Başlatıldı!'));