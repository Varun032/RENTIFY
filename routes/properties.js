const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const auth = require('../middleware/auth');

// Create Property
router.post('/', auth, async (req, res) => {
    try {
        const property = new Property({ ...req.body, sellerId: req.user.id });
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Get Properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Update Property
router.put('/:id', auth, async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(property);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Delete Property
router.delete('/:id', auth, async (req, res) => {
    try {
        await Property.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
