const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World~~~! <br/> Hello ' + process.env.NODE_ENV);
});

module.exports = {
  server: app,
};