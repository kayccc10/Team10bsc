const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;
let contractInstance;
let initialMessage = 'Yay, hi there'
beforeEach(async () => {
    // get a list of accounts
    accounts = await web3.eth.getAccounts();

    console.log("bytecode\n" + bytecode);

    // use one account to deploy contract
    // deploy contract
    let contract = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({from: accounts[0], gas: '1000000'},
            function (error, transactionHash) {
                console.log("transactionHash" + transactionHash)
            })
        .on('receipt', function (receipt) {
            console.log(receipt.contractAddress) // contains the new contract address
        })
        .on('confirmation', function (confirmationNumber, receipt) {
            console.log("Confirmed" + confirmationNumber) // instance with the new contract address
        })
        .then(function (newContractInstance) {
            console.log("newContractInstance " + newContractInstance.options.address)
            // instance with the new contract address
            contractInstance = newContractInstance;
        })
});

describe('Lottery', () => {
    it('deploys a contract ', () => {
        assert.ok(contractInstance.options.address)
    });


});

