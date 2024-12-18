const express = require('express');
const session = require('express-session');
const deviceRoutes = require('./Routes/deviceRoutes');
const userRoutes = require('./Routes/userRoutes');
const orderRoutes = require('./Routes/orderRoutes');
require('dotenv').config();

const app = express();

SECRET_KEY = process.env.SECRET_KEY

app.use(express.json());
app.use(
    session({
        secret: 'SECRET_KEY',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

app.use('/api/devices', deviceRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

module.exports = app;
