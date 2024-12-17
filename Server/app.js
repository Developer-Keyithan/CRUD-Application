const express = require('express');
const deviceRoutes = require('./Routes/deviceRoutes');
const userRoutes = require('./Routes/userRoutes');
const orderRoutes = require('./Routes/orderRoutes');

const app = express();

app.use(express.json());

app.use('/api/devices', deviceRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

module.exports = app;
