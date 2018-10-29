var AWS = require('aws-sdk');
var fs = require('fs');

var s3 =  new AWS.S3({
  accessKeyId: "AKIAJT4TSF276AFENMGQ",
  secretAccessKey: "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",
  region: "us-east-1"
});

class Uploads {
  static async uploadFile(file, _user, stamp){
    console.log(file)
    var buffer = new Buffer(file, 'base64');
    var filename = 'i9edu/' + _user + stamp + '.jpg';

    var params = {
        Bucket: 'compcult',
        Key: filename,
        Body: buffer,
        ACL: 'public-read',
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
    };

    let putObjectPromise = await s3.upload(params).promise()
    let location = putObjectPromise.Location
  }

  static async uploadAudio(file, _user, stamp){
    var buffer = new Buffer(file, 'base64');
    var filename = 'i9edu/' + _user + stamp + '.wav';

    var params = {
        Bucket: 'compcult',
        Key: filename,
        Body: buffer,
        ACL: 'public-read',
        ContentEncoding: 'base64',
        ContentType: 'audio/wav',
    };

    let putObjectPromise = await s3.upload(params).promise()
    let location = putObjectPromise.Location

    console.log(location);
  }

  static async uploadVideo(file, _user, stamp){
    var buffer = new Buffer(file, 'base64');
    var filename = 'i9edu/' + _user + stamp + '.mp4';

    var params = {
        Bucket: 'compcult',
        Key: filename,
        Body: buffer,
        ACL: 'public-read',
        ContentEncoding: 'base64',
        ContentType: 'video/mp4',
    };

    let putObjectPromise = await s3.upload(params).promise()
    let location = putObjectPromise.Location

    console.log(location);
  }
}

module.exports = Uploads;
