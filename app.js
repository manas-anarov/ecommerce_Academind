var express = require('express');

var app = express();
const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');


app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);


// app.use((req, res, next) =>{
// 	res.status(200).json({
// 		message:'its Works'
// 	});
// });


module.exports = app;