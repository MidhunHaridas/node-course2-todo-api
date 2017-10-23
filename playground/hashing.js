const jwt = require('jsonwebtoken');
const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
	bcrypt.hash(password, salt, (err, hash) => {
		console.log(hash);
	});
});


var hashedPassword = '$2a$10$EHbKilg72gJX33.u.Ep.Qu/ce5qz0ZpHRRsKbq1NCtQEsm6oT/XnG';

bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
});

/*data = {
	id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log('Decoded:: ', decoded);*/

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
