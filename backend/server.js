const express = require('express');
const mongoconnect = require('./db.js');
const bodyParser = require('body-parser');
const courseRoute = require('./routes/courseRoute.js')
const cors = require('cors');
const PORT = 8000;

// Connect to MongoDB
mongoconnect();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',courseRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
