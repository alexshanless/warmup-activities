//Numbers
const num = 54; //float
const float = 43.43; //float
const power = 10e3;

/*(Number object .
MAX_SAFE_INTEGER
Math.pow()
MIN_SAFE_INTEGER
MAX_VALUE
MIN_VALUE
POSITIVE.INFINITY
NEGATOVE_INFINITY
NaN
isNaN()
isFinite()
parseInt()
parseFloat()
.toFixed()
*/

//BigInt
/* 03454567456345345435n
works only with bigint
*/

//Math
/*
sqrt() square 
pow() power
abs() module
max() max number
min() 
floor() rounds to smaller num
ceil() rounds to larger num
round() to closer integer
trunc() removes float
random() 
*/

//Examples
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randNum());