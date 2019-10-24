const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const keys = require('../config/keys');
const router = require('./router');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(morgan('combined'));
app.use(cors());

// attempts to parse any request into JSON
app.use(bodyParser.json({ type: '*/*' }));

router(app);

app.listen(5000, () => console.log('Listening on port 5000'));
