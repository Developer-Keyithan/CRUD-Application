const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
    price: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
    quantity: { type: Number, required: true }
});

orderSchema.pre('save', async function (next) {
    try {
        const Device = mongoose.model('Device');
        const device = await Device.findById(this.device);
        if (!device) {
            throw new Error('Device not found');
        }

        this.price = device.price;

        next();
    } catch (err) {
        next(err);
    }
});

orderSchema.virtual('userDetails', {
    ref: 'User',
    localField: 'user',
    foreignField: '_id',
    justOne: true,
    options: { select: 'user_name' }
});

orderSchema.virtual('deviceDetails', {
    ref: 'Device',
    localField: 'device',
    foreignField: '_id',
    justOne: true,
    options: { select: 'device_name' }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;