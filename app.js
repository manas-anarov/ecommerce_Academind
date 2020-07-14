var express = require('express');

var app = express();


app.use((req, res, next) =>{
	res.status(200).json({
		message:'its Works'
	});
});

module.exports = app;