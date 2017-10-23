const jwt = require('jsonwebtoken');
const {SHA256} = require('crypto-js');


data = {
	id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log('Decoded:: ', decoded);

/*var msg = 'New Message';
var hash = SHA256(msg).toString();

console.log(`Message: ${msg}`);
console.log(`hash: ${hash}`);
*/
/*var data = {
	id: 4
};*/

/*var token = {
	data: data,
	hash: SHA256(JSON.stringify(data) + 'secret').toString()
};*/

/*token.data = 5;
token.hash = SHA256(JSON.stringify(data)).toString();
*/

/*var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();

if(resultHash == token.hash) {
	console.log('Verified');
} else {
	console.log('Failed');
}*/
