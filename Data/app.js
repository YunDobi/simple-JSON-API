const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/data', require("./data"));
// app.use('/data', require('./Routers/data'));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});