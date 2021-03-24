// npm start / npm run dev

require("dotenv").config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require("cors")
const mongoose = require("./db/connection")
const debug = require('debug')(`${process.env.npm_package_name}:server`);
const { log } = require("mercedlogger");


const indexRouter = require('./routes/index');

const Product = require('./models/product');

const app = express();
const db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || '3000';

app.listen(PORT, () => {
  debug(`Listening on port ${PORT}`);
  log.white("🚀 Server Launch 🚀", `Listening on Port ${PORT}`);
});

module.exports = app;
