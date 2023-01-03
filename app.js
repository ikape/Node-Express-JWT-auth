const express = require('express')
const app = express()
const authRoutes = require('./routes/authRoutes')
require('dotenv').config()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))


// VIEW ENGINE
app.set('view engine', 'ejs')

// DATABASE
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL)
.then(()=> console.log("Connected to DataBase"))
.catch(error => console.log(error))


// ROUTES
app.get('/', (req,res)=>{res.render('home')})
app.get('/smoothies',(req,res)=> res.render('smoothies'))
app.use(authRoutes)

const PORT = 3000
app.listen(PORT, ()=>console.log(`Running Express Server on Port ${PORT}`))
