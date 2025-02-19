let score = "33a"
console.log(typeof score)

let NumberValue = Number(score)
console.log(typeof NumberValue)

console.log(NumberValue)

//"33"=> this number string can be convert to number 33.

//"33a" or "Naqeeb" this string cannot be converted to number will return NaN(not a number)
//"null" convert to number 0.

let isloggedIn = "Naqeeb"

let BooleanIsloggedIn = Boolean(isloggedIn)

console.log(BooleanIsloggedIn)

//if we assign a value like string "Naqeeb" or number 1,2,3 etc it will convert to true as boolean value.
//If we assign value empty string "" or 0 it will give false.