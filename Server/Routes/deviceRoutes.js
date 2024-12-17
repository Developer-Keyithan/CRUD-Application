const express = require('express');
const router = express.Router();
const {addDevice, getDevices, getDevice, updateDevice, deleteDevice} = require('../Controllers/deviceController');

router.post('/', addDevice);
router.get('/', getDevices);
router.get('/:id', getDevice);
router.put('/:id', updateDevice);
router.delete('/:id', deleteDevice);

module.exports = router;
