import { connect } from 'mongoose';

connect('MONGODB_URL', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false  
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Could not connect to MongoDB', err));

module.exports = mongoose.connection;