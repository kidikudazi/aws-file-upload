# USE THIS TO CREATE A PUBLIC POLICY FOR S3 BUCKET
```
{
    "Version": "2012-10-17",
    "Id": "Policy1559923456998",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name-goes-here/*"
        }
    ]
}
```