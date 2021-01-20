const { response } = require("express");
const express = require("express");
const cors = require('cors')
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'maximkaxaxaxa@mail.ru',
        pass: 'MaximUgarov2002'
    }
}, {
    from: 'Кодовство <maximkaxaxaxa@mail.ru>',
});

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        res.statusCode = 200;
        res.end('ok');
    })
}
module.exports = mailer