const express = require("express");
const logger = require('morgan');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, './client/build')));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/book", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// routes
app.use(require('./routes/api'));
app.use(require('./routes/html'));
// "start": "node server.js",
// "dev": "concurrently \"npm start\" \"cd client && npm start\""

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
