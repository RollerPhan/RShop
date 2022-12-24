const express = require('express')
const pug = require('pug');
const app = express()
const path = require('path');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const cookieParser = require('cookie-parser')

const buy_router = require('./routes/buy-route')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
db.defaults({products: []}).write()

app.get('/', (req,res) => {

	res.render('home',{
		products : db.get("products").value()
	})
})
app.use('/buy',buy_router)
app.listen(3333,() => console.log('LISTENING ON PORT 3333'))