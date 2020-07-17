var express = require('express');

const router = express.Router();


router.get('/', (req,res, next) =>{

	res.status(200).json({
		posts: {
			title: 'asdasdasd',
			description: "asdasdasda"
		}
	});

});


router.post('/', (req,res, next) =>{

	res.status(201).json({
		posts: {
			title: 'asdasdasd',
			description: "asdasdasda"
		}
	});

});


router.get('/:productId', (req,res, next) =>{

	const id = req.params.productId;

	if (id === 'special'){
		res.status(200).json({
			message: 'Special',
			id : id
		});
	}else{
		res.status(200).json({
			message: 'No Special'
		});
	}

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