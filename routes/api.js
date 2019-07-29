require('dotenv').config();

const express = require('express');
const router = express.Router();
const aws = require('../config/aws.js');
const upload = require('../middleware/image-upload.js');

//  get uploaded file
const singleUpload =  upload.single('image');

router.post('/upload', (req, res)=>{
	try{

		singleUpload(req, res, function(err) {
		    if (err) {
		      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}]});
		    }
		    // return res.json(req.file); // view upload response data
		    return res.json({'imageUrl': req.file.location}) // returns uploaded file url (audio,video, image)
		});

	}catch(e){
		res.sendStatus(500)
	}
});

router.delete('/delete_file', (req, res)=>{

	var s3 = new aws.S3();
	// delete file from aws S3 Bucket
	s3.deleteObject({
	  // Bucket: process.env.AWS_S3_BUCKET_NAME+"/demo", // files in a folder
	  Bucket: process.env.AWS_S3_BUCKET_NAME, // files not inside a folder
	  Key: req.query.file_path
	},function (err,data){
		if (err) {
			res.status(204).send(err.message)
		}else{
			return res.json({data})
		}
	})
})

module.exports = router