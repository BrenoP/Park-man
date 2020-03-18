const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://parkman:parkman@cluster1-j5ymu.mongodb.net/parkman?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

app.listen(3001);