require('dotenv').config();
const aws = require('aws-sdk');

// declare all aws credentials
aws.config.update({
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  region: process.env.AWS_S3_REGION
});

module.exports = aws;