# Node.JS E-Posta Servisi
Node.js ile uygulamalarınız için mail gönderme servisi. Hızlı ve basit şekilde E-Posta gönderin.
Kendi projelerinizdeki ihtiyaca göre geliştirebilirsiniz. Örneğin; sipariş formundaki verilerin veritabanına kayıt edilirken aynı zamanda eposta olarak gönderilmesini sağlayabilirsiniz...

## Yükleme
Projeyi bilgisayarınıza klonlayın.
Ardından aşağıdaki komutları projenizin dizinindeyken çalıştırın.

Örnek Kullanım (Tarayıcınızın adres çubuğundan veya Postman gibi araçlarla GET isteği yaparak kullanabilrsiniz.)
->  http://localhost:8080/?user=EPOSTAHESABINIZ&pass=EPOSTAHESABINIZINŞİFRESİ&to=GÖNDERİLECEKEPOSTAADRESİ&subject=EPOSTAKONUSU&text=EPOSTAİÇERİĞİ

```sh
$ npm install
$ npm start
```

### BASİT MAİL GÖNDERMEK İÇİN
```sh
var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
```

### BİRDEN FAZLA KİŞİYE MAİL GÖNDERMEK İÇİN
```sh
var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
}
```

### HTML TEMPLATE KULLANARAK MAİL GÖNDERMEK İÇİN
```sh
var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
}
```

 mailserver.js dosyasındaki mailOptions objesini değiştirebilirsiniz!
