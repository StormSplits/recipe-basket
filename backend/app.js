const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const server = process.on('uncaughtException', (err) => {
  console.log('UNCAUGHTEXCEPTION ! 🧨 Shutting down....');
  console.log(err.name, err.message);
  process.exit(1);
});

const AppError = require('./utils/appError.js');
const globalErrorHandler = require('./controller/errorController.js');
const route = require('./routes/apiRoute.js');
const app = express();

app.use(cookieParser());
app.use(cors())
app.use(express.json());
app.use('/api/v1/app', route);




app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLEREJECTION ! 🧨 Shutting down....');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
