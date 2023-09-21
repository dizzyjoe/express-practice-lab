const express = require('express');
const studentsRouter = require('./routes/students');

const app = express();


app.use('/students', studentsRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});