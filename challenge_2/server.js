var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();
var fs = require('fs');


app.use(express.static(path.join(__dirname,'/client')));
var jsonParser = bodyParser.json();

app.post('/generate', jsonParser, (req, res) => {

  fs.writeFile('sample.json', JSON.stringify(req.body,null, 2), (err, data) => {
    if (err) {
        console.log(`err writing file with ${err}`)
    } else {
        console.log(`${data} saved`);
    }
  })

    
    res.send('OK');
})

app.listen(3001, () => {
    console.log(`Listening on port 3001`)
})







// const items = req.body;
//     const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
//     const header = Object.keys(items)
//     let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
//     csv.unshift(header.join(','))
//     csv = csv.join('\r\n')

// console.log(csv)
