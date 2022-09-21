//required variables
const express = require('express');
const dotenv = require('dotenv');
const SampleRoutes = require("./routes/sample");
const bodyParser = require("body-parser");

//for usage of express
const app = express();

//.env configuration
dotenv.config();

//PORT processing
const PORT = process.env.PORT;

//Request Handler
app.use(bodyParser.json());

//Routes Configuration
app.use('/users', SampleRoutes);

//Default API status
app.use('/', (req, res) => {
    res.status(200).json({
        response: "API is now currently working"
    })  
})

//App Status Listener
app.listen(PORT, () =>  { 
    console.log(`Sample API now listening to https://localhost:${PORT}`);
});