const express = require('express');
const router = express.Router();

const users = [{name: 'Tony', email: 'thois is email'}];

router.get('/', (req,res) => {
  res.json({users});
});

module.exports = router;