const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    deviceName: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true}
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;