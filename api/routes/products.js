var express = require('express');

const router = express.Router();
const mongoose = require('mongoose');


const Product = require('../models/product');

router.get('/', (req,res, next) =>{

	res.status(200).json({
		posts: {
			title: 'asdasdasd',
			description: "asdasdasda"
		}
	});

});


router.post('/', (req, res, next) =>{

	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price
	});
	console.log(req.body.name)
	product.save()
	.then(result=>{
		console.log(result);
	})
	.catch(err => console.log(err));

	res.status(201).json({
		posts: {
			message: 'Post',
			createdProduct: product
		}
	});

});


router.get('/:productId', (req,res, next) =>{

	const id = req.params.productId;

	Product.findById(id)
	.exec()
	.then(doc=>{
		console.log(doc);
		res.status(201).json(doc);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error:err})
	});

});


router.patch('/:productId', (req,res, next) =>{

	res.status(200).json({
		message: 'Updated',
	});

});

router.delete('/:productId', (req,res, next) =>{

	res.status(200).json({
		message: 'Deleted',
	});

});




module.exports = router;