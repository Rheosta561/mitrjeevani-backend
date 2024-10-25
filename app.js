const express = require('express');
const axios = require('axios');
const cors = require('cors');  //  CORS middleware
const app = express();

app.use(cors());  
app.use(express.json());

app.listen(3000);
