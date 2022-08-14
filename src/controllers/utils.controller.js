const AWS = require('aws-sdk')

const generateId = () => {
    let result = ''
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!-.*()'
    const length = 10

    const charactersLength = characters.length
    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }

    const date = new Date().toISOString().split('T')[0].replace(/-/g, '')
    return `${date}_${result}`
}

const signS3 = async (req, res) => {
    const AWS_S3_KEY = process.env.S3AccessKeyId

    const AWS_S3_SECRET = process.env.S3SecretKey

    const AWS_S3_BUCKET = process.env.S3Bucket

    const isVideo = req.query.isVideo === 'true'

    const credentials = {
        accessKeyId: AWS_S3_KEY,
        secretAccessKey: AWS_S3_SECRET,
    }
    AWS.config.update({
        credentials,
        region: 'ap-southeast-2',
        signatureVersion: 'v4',
    })
    const s3 = new AWS.S3()

    const imageName = generateId()

    // const s3 = new aws.S3()

    // {
    //     accessKeyId: AWS_S3_KEY,
    //     secretAccessKey: AWS_S3_SECRET,
    //     endpoint: 's3-us-east-2.amazonaws.com',
    //     signatureVersion: 'v4',
    //     region: 'us-east-2',
    // }

    // const s3ParamsFile = {
    //     Bucket: AWS_S3_BUCKET,
    //     Key: imageName,
    //     Expires: 60,
    //     ContentType: 'image',
    // }
    s3.getSignedUrl(
        'putObject',
        {
            Bucket: AWS_S3_BUCKET,
            Key: (isVideo ? 'videos/' : 'source/') + imageName, // filename
            Expires: 3000, // time to expire in seconds
            ACL: 'public-read',
        },
        (err, data) => {
            if (err) {
                console.log(err)
                res.end()
                return
            }

            const returnDataFile = {
                signedRequest: data,
                url: `https://${AWS_S3_BUCKET}.s3.ap-southeast-2.amazonaws.com/${
                    isVideo ? 'videos' : 'images'
                }/${imageName}${isVideo ? '' : '.jpeg'}`,
                thumbnail: `https://${AWS_S3_BUCKET}.s3.ap-southeast-2.amazonaws.com/thumbnails/${imageName}.jpeg`,
            }
            res.write(
                JSON.stringify({
                    ...returnDataFile,
                })
            )

            res.end()
        }
    )
}

module.exports = {
    signS3,
}
