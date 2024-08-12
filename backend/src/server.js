const express = require('express')
const app = express()
const  dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const dbConnection = require('./utils/db')
const port = process.env.PORT || 8000 ;
app.use(express.json())
app.use(cors({
  origin: '*'
}))

app.use('/',require('./routes/authRouts'))
app.use('/',require('./routes/addNewsRoutes'))

dbConnection()
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`)
})
