const express = require('express');
const router = express.Router();
const {addDevice, getDevices, getDevice, updateDevice, deleteDevice, getDeviceInfo, adminOnly} = require('../Controllers/deviceController');
const { isAuthenticated, isAdmin } = require('../Middleware/auth');

router.post('/', addDevice);
router.get('/info', isAuthenticated, getDeviceInfo);
router.get('/admin', isAuthenticated, isAdmin, adminOnly);
router.get('/', getDevices);
router.get('/:id', getDevice);
router.put('/:id', updateDevice);
router.delete('/:id', deleteDevice);

module.exports = router;
