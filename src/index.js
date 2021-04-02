const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const router = require('./routes/router.routes.js');

require('./database.js');

app.use(express.json());
app.use('/api/v1',router);

function init(){
  app.listen(process.env.PORT || 4000)
  console.log(`Connected on port ${process.env.PORT}`)
}

init();