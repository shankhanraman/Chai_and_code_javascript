const accountId = 1453
let accountEmail ="abc@gmail.com"
var accoutnPassword ="12345"
accountCity  = "Jaipur"

// accountId = 2 not allowed

accountEmail ="123@gmail.com"
accoutnPassword="Hello world"
accountCity="Patna"
console.log(accountId);
console.table([accountEmail,accountEmail,accountId,accoutnPassword])
/*
Preferred not to use of var
Because of issue in block scope and funtional scope
*/
let accountState;
console.table([accountEmail,accountId,accountState])

