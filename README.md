Event Management API

This powerful API provides a comprehensive range of functionalities to manage events, including creating, retrieving, updating, and deleting events. It also classifies events into upcoming and live categories, giving you maximum control over your events.

Database Schema

The database schema consists of a single, highly efficient collection named "events". Each document in this collection represents an event and has the following fields:
- eventName: String, the name of the event.
- startTime: Date, the starting time of the event.
- duration: Number, the duration of the event in minutes.

REST API Endpoints

1. Create Event
- URL: /API/events
- Method: POST
- Request Body:
{
"eventName": "Event Name",
"startTime": "YYYY-MM-DDTHH:MM:SSZ",
"duration": 60
}
- Response: The created event object.

2. Get All Events
- URL: /API/events
- Method: GET
- Response: An array of all events.

3. Get Upcoming Events
- URL: /API/events/upcoming
- Method: GET
- Response: An array of upcoming events.

4. Get Live Events
- URL: /API/events/live
- Method: GET
- Response: An array of live events.

With this API, you can confidently manage your events with ease and efficiency.

![createEventEndpoint](https://github.com/HeyitzSagar/Event_Management/assets/137028088/6c1ac322-788f-4a11-904d-51256040d022)
![Alleventendpoint](https://github.com/HeyitzSagar/Event_Management/assets/137028088/c017bbd3-a8cd-40a8-b6f3-acc74fa78797)
![upcomingeventendpoint](https://github.com/HeyitzSagar/Event_Management/assets/137028088/7e76bb15-91b4-4d03-a6ac-946715f79809)
![liveeventendpoint](https://github.com/HeyitzSagar/Event_Management/assets/137028088/70ec7f15-7529-4772-b312-fb2679c6116d)
