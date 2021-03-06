const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, './public')))

app.listen(3000)
console.log('Link List running on :3000');
