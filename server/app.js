const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const UI_API_URL = 'http://localhost:4200';

// Socket IO
const server = require('http').createServer(app)
const io = require('socket.io').listen(server);
require('./socket/streams')(io);

// Express Configuration
app.use(morgan('dev'));
app.use(cookieParser())
app.use(express.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());

// CORS
const options = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "X-Access-Token", "application/x-www-form-urlencoded", "charset=UTF-8", "application/json", "text/plain", "Access-Control-Allow-Headers"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: UI_API_URL,
    preflightContinue: false
};

app.use(cors(options));

// Middlewares/Services
// app.use(passport.initialize());
// require('./services/passport')(passport);

// API Routes
require('./routes')(app);

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Server
const port = process.env.PORT || 3000;
server.listen(port, (err) => {

    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
});