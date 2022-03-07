const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 4040;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require("./Routers/users"));
// app.use('/data', require('./Routers/data'));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});