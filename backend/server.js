const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('./config/db');

const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// you can also use this 

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

var loginRoute = require('./routes/login');
app.use('/loginRoute', loginRoute);










var port = process.env.PORT;
app.listen(port, () => {
    console.log(`server started running on port :${port}`)
})
mongoose.connectionWithDatabase();
