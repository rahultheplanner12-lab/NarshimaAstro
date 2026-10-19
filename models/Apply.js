
const mongoose = require('mongoose');

const astrologerSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    phone: {
        type: String,
        required: true,
        match: /^[6-9][0-9]{9}$/
    },

    city: {
        type: String,
        required: true,
        trim: true
    },

    state: {
        type: String,
        required: true,
        trim: true
    },

    experience: {
        type: Number,
        required: true,
        min: 0
    },

    specialization: {
        type: String,
        required: true,
        enum: [
            'Vedic Astrology',
            'KP Astrology',
            'Lal Kitab',
            'Numerology',
            'Palmistry',
            'Tarot Reading',
            'Vastu Shastra',
            'Prashna Kundali',
            'Other'
        ]
    },

    languages: {
        type: String,
        required: true
    },

    consultationModes: {
        type: String,
        required: true,
        enum: ['Chat', 'Voice Call', 'Video Call', 'All']
    },

    availableHoursPerDay: {
        type: Number,
        required: true,
        enum: [5, 6, 7, 8, 9]
    },

    aboutYourself: {
        type: String,
        required: true,
        maxlength: 2000
    },

    interviewAvailability: {
        type: String,
        required: true,
        enum: ['Yes', 'No']
    }

}, { timestamps: true });

const AstrologerApplication = mongoose.model(
    'AstrologerApplication',
    astrologerSchema
);

module.exports = AstrologerApplication;
