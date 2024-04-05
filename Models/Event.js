import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    eventName:{
        type: String, 
        required: true
    },
    startTime: {
        type: Date, 
        required: true
    },
    duration:{
        type: Number,  // Duration in minutes
        required: true
    }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
