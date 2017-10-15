const { SHA256 } = require('crypto-js');
const jwt        = require('jsonwebtoken');
const bcrypt     = require('bcryptjs');

let password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//        console.log(hash); 
//     });
// });

let hashPassword = '$2a$10$uvA2XQ4lCODjrXg4ngxO0OHd6Bpn5SHuDyAVZ8MIX0KJ.xTgE8ePy';

bcrypt.compare(password, hashPassword, (err, res) => {
    console.log(res);
});