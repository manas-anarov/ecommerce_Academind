var express = require('express');

const router = express.Router();


router.get('/', (req,res, next) =>{

	res.status(200).json({
		message: 'Orders'
	});

});


router.post('/', (req,res, next) =>{

	res.status(201).json({
		message: 'Orders Posted'
	});

});


router.get('/:orderId', (req,res, next) =>{

	const id = req.params.orderId;

	
	res.status(200).json({
		message: 'Order detail',
		id : id
	});


});



router.delete('/:orderId', (req,res, next) =>{

	res.status(200).json({
		message: 'Deleted',
	});

});




module.exports = router;