require('./models/User');
require('./models/Track')
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser= require('body-parser');
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.u8mxt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo');
});

mongoose.connection.on('error', (err) => {
    console.log('Error', err);
})

app.get('/', requireAuth, (req, res) => {
    res.send(`your email is: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
})