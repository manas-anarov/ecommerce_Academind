const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const ordersRoutes = require('./api/routes/orders');
const productsRoutes = require('./api/routes/products');


app.use(cors());

app.use(bodyParser.json());




app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);


// mongodb+srv://<username>:<password>@cluster0.5joob.mongodb.net/<dbname>?retryWrites=true&w=majority

// mongoose.connect('mongodb+srv://userNode:' + process.env.MONGO_ATLAS_PW + '@cluster0.ztm3j.mongodb.net/CluserO?retryWrites=true&w=majority',
// 	{ useNewUrlParser: true,  useUnifiedTopology: true}, () =>{
// 		console.log('salam')
// 	}
// );


// 'mongodb+srv://userNode:1993Node2020Snoop@cluster0.ztm3j.mongodb.net/CluserO?retryWrites=true&w=majority'


mongoose.connect('mongodb+srv://samuray:' + 'samuray' + '@cluster0.5joob.mongodb.net/CluserO?retryWrites=true&w=majority',
	{ useNewUrlParser: true,  useUnifiedTopology: true}, () =>{
		console.log('salam')
	}
);

mongoose.Promise = global.Promise;

//roures
app.get('/', (req,res) =>{
	res.send('Флаттерчилерге салам');
});




app.listen(3000);