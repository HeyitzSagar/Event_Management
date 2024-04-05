import express from 'express';
import Event from '../Models/Event';

const router = express.Router();

// Creating a Event API

router.post('/', async(req, res) => {
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

router.get('/', async(req, res) => {
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
        const tenMinutesBefore = new Date(currentTime.get() - 10 * 60000);
        const liveEvents = await Event.find({ startTime: { $gt: tenMinutesBefore, $lt:currentTime} });
        res.json(liveEvents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;
