const crypto = require('crypto');

function calculateSHA1(data) {
    const sha1Hash = crypto.createHash('sha1');
    sha1Hash.update(data);
    return sha1Hash.digest('hex');
}

const inputData = 'Hello World!';

const h1 = calculateSHA1(inputData);
console.log(`First Hash: ${h1}`);

const modifiedData = 'Hello world!';

const h2 = calculateSHA1(modifiedData);
console.log(`Second Hash: ${h2}`);

if (h1 === h2) {
    console.log('Hashes are equal');
} else {
    console.log('Hashes are not equal');
}