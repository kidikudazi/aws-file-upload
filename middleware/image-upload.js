const aws = require('../config/aws.js');
const multer = require('multer');
const multerS3 = require('multer-s3');

require('dotenv').config();

// file upload middleware
const s3 = new aws.S3();

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  storage: multerS3({
    acl: 'public-read',
    s3,
    // bucket: process.env.AWS_S3_BUCKET_NAME+'/demo', // saves file into folder on aws or creates new folder with the specified folder name
    bucket: process.env.AWS_S3_BUCKET_NAME,
    key: function (req, file, cb) {
      cb(null, Date.now().toString()+'_'+file.originalname) // append random timestamp to file name
    }
  }),
  onError : function(err, next) {
      next(err)
    }
})


module.exports = upload;