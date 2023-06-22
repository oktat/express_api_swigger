const express = require('express')
const app = new express()
const morgan = require('morgan')
const router = require('./routes/api')

const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(morgan('tiny'))
// app.use(express.static('public'))
app.use(router)

app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT)
})