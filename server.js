const express = require('express');
const path = require('path');
const students = require('./data/student-db'); 

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.get('/', function (req, res) {
  res.redirect('/students');
});

app.get('/students', function (req, res) {
  const students = studentDb.getAll(); 
  res.render('students/index', { students });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
