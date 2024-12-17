const express = require('express');
const router = express.Router();
const Device = require('../Models/Device');

exports.addDevice =  async (req, res) => {
    try {
        const device = new Device(req.body);
        const savedDevice = await device.save();
        res.status(201).json(savedDevice);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getDevices = async (req, res) => {
    try {
        const devices = await Device.find();
        res.status(200).json(devices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDevice =  async (req, res) => {
    try {
        const device = await Device.findById(req.params.id);
        if (!device) return res.status(404).json({ error: 'Device not found' });
        res.status(200).json(device);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateDevice = async (req, res) => {
    try {
        const updatedDevice = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDevice) return res.status(404).json({ error: 'Device not found' });
        res.json(updatedDevice);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteDevice = async (req, res) => {
    try {
        const deletedDevice = await Device.findByIdAndDelete(req.params.id);
        if (!deletedDevice) return res.status(404).json({ error: 'Device not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};