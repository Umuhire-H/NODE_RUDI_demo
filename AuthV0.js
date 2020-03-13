const bcrypt = require('bcrypt');
const saltRounds = 10; // see comments below
const goodPassword = 'password123';
const wrongPassword = '1234567890';

let hashedPasswordWithSaltAndRoundsNumber;

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(goodPassword, salt, function(err, hash) {
        hashedPasswordWithSaltAndRoundsNumber = hash;
        console.log(hashedPasswordWithSaltAndRoundsNumber);
        bcrypt.compare(goodPassword, hash, function(err, result) {
            if (result=== true) console.log(goodPassword + " is the good password");
        });
        bcrypt.compare(wrongPassword, hash, function(err, result) {
            if (result=== false) console.log(wrongPassword + " is the wrong password");
        });
    });
});
// https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/
// 
//The long answer is that if you didn't include a salt in your hash, it'd be a lot more feasible to execute a brute force attack or use a rainbow table to figure out what passwords compute to what hashes. Adding in a random bit of data before putting it through your hash function means that you not only need to know the password, but you also need to know the random bit of data that was generated. bcrypt is a little special in that it requires you to use a salt, and that salt also tells it how many types it should perform the hash, which means bcrypt also needs to generate that salt. bcrypt performs its hash function 2^n times, where n is the number of times you tell it when you create the salt (this is saltRounds that you see in some of the documentation's sample code). This is meant for you to be able to configure, so that you can find the right balance between speed and security for your hardware. The point here is to make it as slow as acceptably possible, so it takes an attacker a longer time to generate their own hash to compare. The higher the number, the more times the hash is performed, and the more secure your hash is as a result, given the extra time cost of having to do more work. If your database is compromised, this means that it could take an attacker centuries to figure out a single password instead of seconds, so you generally want to make this number as high as possible while keeping your site appear speedy enough for your users, though 12 is generally a reasonable minimum given the speed of modern hardware. However, you should definitely make it higher if your server is fast enough