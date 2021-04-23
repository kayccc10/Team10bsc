import web3 from './web3';

const address = '0xD6F5Bd8F5Ba2CebfcC6267140e5a2D7497BCc77B'

const abi = [{"constant":true,"inputs":[{"name":"RequestIndex","type":"uint256"}],"name":"viewIdRequestStatus","outputs":[{"name":"RequestedBy","type":"string"},{"name":"idOverAllStatus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userAdd","type":"address"}],"name":"getData","outputs":[{"name":"idNo","type":"uint256"},{"name":"idName","type":"string"},{"name":"idDob","type":"uint256"},{"name":"idHash","type":"string"},{"name":"idHomeAddress","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"RequestIndex","type":"uint256"}],"name":"viewIdRequestDetail","outputs":[{"name":"RequestedBy","type":"string"},{"name":"idNo","type":"uint256"},{"name":"idName","type":"uint256"},{"name":"idDOB","type":"uint256"},{"name":"idHash","type":"uint256"},{"name":"idHomeAddress","type":"uint256"},{"name":"idOverAllStatus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_userAdd","type":"address"},{"name":"_RequestedBy","type":"string"},{"name":"_idNo","type":"uint256"},{"name":"_idName","type":"uint256"},{"name":"_idDOB","type":"uint256"},{"name":"_idHash","type":"uint256"},{"name":"_idHomeAddress","type":"uint256"},{"name":"_idOverAllStatus","type":"uint256"}],"name":"sendRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"UserIndex","type":"uint256"}],"name":"viewUser","outputs":[{"name":"fullName","type":"string"},{"name":"emailAddress","type":"string"},{"name":"phoneNo","type":"uint256"},{"name":"uploader","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fullName","type":"string"},{"name":"_emailAddress","type":"string"},{"name":"_phoneNo","type":"uint256"}],"name":"addUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"registerInstitution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idNo","type":"uint256"},{"name":"_idName","type":"string"},{"name":"_idDob","type":"uint256"},{"name":"_idHash","type":"string"},{"name":"_idHomeAddress","type":"string"}],"name":"addUserId","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"viewIdRequestLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"RequestIndex","type":"uint256"},{"name":"_idNo","type":"uint256"},{"name":"_idName","type":"uint256"},{"name":"_idDOB","type":"uint256"},{"name":"_idHash","type":"uint256"},{"name":"_idHomeAddress","type":"uint256"},{"name":"_idOverAllStatus","type":"uint256"}],"name":"updateIdRequestStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"institutionInfo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"UserIndex","type":"uint256"}],"name":"viewUserId","outputs":[{"name":"idNo","type":"uint256"},{"name":"idName","type":"string"},{"name":"idDob","type":"uint256"},{"name":"idHash","type":"string"},{"name":"idHomeAddress","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"fullName","type":"string"},{"indexed":false,"name":"emailAddress","type":"string"},{"indexed":false,"name":"phoneNo","type":"uint256"},{"indexed":false,"name":"uploader","type":"address"}],"name":"userCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"idNo","type":"uint256"},{"indexed":false,"name":"idName","type":"string"},{"indexed":false,"name":"idDob","type":"uint256"},{"indexed":false,"name":"idHash","type":"string"},{"indexed":false,"name":"idHomeAddress","type":"string"}],"name":"idCreated","type":"event"}]

export default new web3.eth.Contract(abi, address);
