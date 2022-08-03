const express = require('express')
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express()
const port = 3001


app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/simpleform', (req, res) => {
    //res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    console.log('Simple Form...')
    console.log(req.body);
    res.send('Got a POST request')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})