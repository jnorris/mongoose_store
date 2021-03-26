// npm start / npm run dev

require("dotenv").config();

const express = require('express');
const methodOverride = require('method-override')
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require("cors")
const debug = require('debug')(`${process.env.npm_package_name}:server`);
const { log } = require("mercedlogger");

const productsRouter = require('./routes/products');
const Product = require('./models/product');

const PORT = process.env.PORT || '3000';
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.get('/', (req, res) => {
  res.redirect('/products');
});
app.use('/products', productsRouter);

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

app.listen(PORT, () => {
  debug(`Listening on port ${PORT}`);
  log.white("🚀 Server Launch 🚀", `Listening on Port ${PORT}`);
});

module.exports = app;
