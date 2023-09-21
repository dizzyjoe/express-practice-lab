const express = require('express');
const router = express.Router();
const studentDB = require('../student-db');

router.get('/', (req, res) => {
  const students = studentDB.getAll();
  res.json(students);
});

module.exports = router;