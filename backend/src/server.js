const express = require('express')
const app = express()
const  dotenv = require('dotenv')
dotenv.config()
const dbConnection = require('./utils/db')



const port = process.env.PORT || 8000 ;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
dbConnection()
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`)
})
