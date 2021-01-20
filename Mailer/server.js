const bodyParser = require('body-parser')
const express = require('express')
const mailer = require('./nodeMailer')

const app = express()
const PORT = 3001

let user = undefined

app.use(bodyParser.json())
app.post('/callback', (req, res) => {
    console.log(req,res);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
    if (!req.body.user_number || !req.body.user_name || !req.body.user_email) return res.sendStatus(400)
    const message = {
        to: 'maximkaxaxaxa@mail.ru',
        subject: `Заявка с сайта Мастер Лифт`,
        html: `<h1>Заявка с сайта Мастер Лифт</h1><br><h3>Имя клиента: ${req.body.user_name} <br> Номер клиента: ${req.body.user_email}<br> ${req.body.user_number}</h3><br><p>Кодовство 2020</p>`
    }
    mailer(message)
    user = req.body
    res.send('successfully')

})
app.use('/callback', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
    // if (typeof user !== 'object') return res.sendFile(__dirname + './urist-parther/src/callbackform/callbackWindow.jsx')
})
app.listen(PORT, () => console.log(`NodeMailer server on  http://127.0.0.1:${PORT}/callback`))