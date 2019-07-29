const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


let apiRoute = require('./routes/api');


app.use('/api/v1', apiRoute);


const Port = process.env.PORT || 5000;

app.listen(Port, function() {
	// body...
	console.log(`server started on port ${Port}`);
})