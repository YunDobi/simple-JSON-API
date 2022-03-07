
const express = require('express');
const axios = require('axios');
const router = express.Router();

const users = [];
axios.get('http://localhost:4041/data')
  .then((response) => {
    users.push(response.data.users[0]);
  });

router.get('/', (req,res) => {
  res.send("this is runing restful api");
});

router.get('/users', (req,res) => {
  res.json({users});
});

router.get('/users/:name', (req, res) => {
  const {name} = req.params;
  const user = users.filter((user) => user.name === name)[0];
  res.json(user);
});

router.post('/adduser', (req,res) => {
  const {name, email} = req.body;
  if (name, email) {
    users.push({name, email});
    res.json({users});
  }
});

module.exports = router;