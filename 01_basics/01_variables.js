const accountId = 144553
let accountEmail = "vineet@gmail.com"
var accountPassword = '12345'
accountCity = "hisar" // bad practice 
let accountState; // allowed

// accountId = 2 // not allowed
accountEmail = "chahal@gmail.com"
accountPassword = '1234'
accountCity = "goa"

console.log(accountId);

/*
prefer to use const and let
prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])