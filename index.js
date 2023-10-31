const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userAuth = require('./Routers/userAuth');
const filmLists = require('./Routers/filmLists');

const app = express();
app.use(cors());
app.use(express.json());
const db = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/filmmaking',{ useNewUrlParser: true, useUnifiedTopology: true })
app.use('/',userAuth);
app.use('/',filmLists);

app.get('/films', (req, res) => { res.send("<h1>Filmy</h1>") });
app.listen(3001, () => { console.log('listening on 3001') })