const express = require('express');
const morgan = require('morgan');

const app = express();
const ordersRoutes = require('./api/routes/orders');

const productsRoutes = require('./api/routes/products');


app.use(morgan('dev'));
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