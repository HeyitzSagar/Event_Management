import express from 'express';
import{Event} from '../Models/Event.js';

const router = express.Router();

// Creating a Event API

router.post('/CreateEvent', async(req, res) => {
    try {
        const {eventName, startTime, duration} = req.body;
        const event = new Event({eventName, startTime, duration});
        await event.save();
        res.json({message: 'Event created successfully', event});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Get all Events API

router.get('/AllEvent', async(req, res) => {
    try {
        const events = await Event.find();
        res.json({events});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Get a single Event API
//  router.get('/:id', async(req, res) => {
//     try {
//         const event = await Event.findById(req.params.id);
//         res.json({event});
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// });

// get upcoming events API

router.get('/upcoming', async (req, res) => {
    try {
      const currentTime = new Date();
      const upcomingEvents = await Event.find({ startTime: { $gt: currentTime } });
      res.json(upcomingEvents);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })


// get live events API

router.get('/live', async (req, res) => {
    try {
        const currentTime = new Date();
        const tenMinutesBefore = new Date(currentTime.getTime() - 10 * 60000);

        // Find all events from the database
        const allEvents = await Event.find();

        // Filter live events based on start time
        const liveEvents = allEvents.filter(event => {
            const startTime = new Date(event.startTime);
            return startTime >= tenMinutesBefore && startTime <= currentTime;
        });

        res.json(liveEvents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})



export {router as eventRouter}
