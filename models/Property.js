const mongoose = require('mongoose');
const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    area: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    nearbyHospitals: { type: String },
    nearbyColleges: { type: String },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});
const Property = mongoose.model('Property', PropertySchema);
module.exports = Property;
