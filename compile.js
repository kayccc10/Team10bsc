const path = require('path');
const fs = require('fs');
const solc = require('solc');

const identityPath = path.resolve(__dirname, 'contracts', 'IdVerify.sol');
const source = fs.readFileSync(identityPath, 'utf8');

// console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1).contracts[':IdVerify']