require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser'); 
const app = express();

const PORT = process.env.PORT || 4000

const URL = process.env.DB_URI

mongoose.connect(URL, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { 
    console.log('Successfully connected to MongoDB')
  })
  .catch((err) => { 
  console.log('Could not connect to Mongodb:', err)
  })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => { 
  res.send('Hello App 4000')
})

app.listen(PORT, () => { 
  console.log(`App running on localhost port ${PORT}`)
})