var express = require('express');
var bodyParser = require('body-parser');
const morgan = require('morgan');
var app = express();
const cors = require('cors');
const mongoose = require('mongoose');





mongoose.connect(
	'mongodb+srv://userNode:' + process.env.MONGO_ATLAS_PW + '@cluster0.ztm3j.mongodb.net/CluserO?retryWrites=true&w=majority', 
	{ useNewUrlParser: true,  useUnifiedTopology: true}
);

app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


const ordersRoutes = require('./api/routes/orders');
const productsRoutes = require('./api/routes/products');

app.use((req, res, next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		"Access-Control-Allow-Headers", 
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method  === "OPTIONS"){
		res.header("Access-Control-Allow-Methods", 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});



app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);



app.use((req, res, next) =>{

	const error = new Error('Not found');
	error.status = 404;
	next(error);

});


app.use((error, req, res, next) =>{

	res.status(error.status || 500);
	next(error);

	res.json({
		error: {
			message: error.message
		}
	});

});



module.exports = app;