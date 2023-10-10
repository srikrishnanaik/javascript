const accountId = 14354
let accountEmail = "krishna@krishna.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2

/*
prefer not to use var 
because of block and functional scope
*/

accountEmail = "k@k.com"
accountPassword = "1123"
accountCity = "Bengaluru"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);