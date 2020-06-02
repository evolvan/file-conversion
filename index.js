const express = require('express'),
    user = require('./routers/User.js'),
    app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.set('trust proxy', true);

//map router files to respective urls
//these are stored in a directory and set above, these contain all of the handlers for each of my routes
app.use('/user', user);

//set port and listen on it
app.listen(5000, () => console.log("Server running on port 5000"));