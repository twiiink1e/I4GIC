const express = require('express');
const fs = require('fs');

const app = express ()

app.get('/', function (req, res) {
  fs.readFile('./index.html', 'utf8', (err, html) => {
    if (err) {
       res.status(500).send(err)
       return;
    }
    res.send(html)
  })
})

app.get('/detail', function (req, res) {
  fs.readFile('./detail.html', 'utf8', (err, html) => {
    if (err) {
       res.status(500).send(err)
       return;
    }
    res.send(html)
  })
})
  

app.listen(3000, () => {
  console.log("Your app is running on http://localhost:3000/");
})