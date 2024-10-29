const express = require('express')
const cors = require('cors')
const bd = require('../Backend/db')
const router = require('../Backend/Routes/item')
const bodyParser = require('body-parser')


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const port = process.env.PORT | 3002
const localhost = '127.0.0.1'


bd.connect()
.then((res) =>{
    console.log('connexion done', )
})
.catch((err) => console.log('An error occured', err))

app.use('/item', router)

app.listen(port, localhost, function(){
    console.log('The server is running.')
})