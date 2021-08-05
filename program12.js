// Math 
//the Math.ceil()  fucntion always a rounds a number up to the next largest integer; 
var number1 = 4.233333; 
console.log(Math.ceil(number1));

// Math.floor(). The Math.floor() function returns the largest integer less than or equal to a given number.

var number2 = 4.2232322; 
console.log(Math.floor(number2));

// The Math.round() function returns the value of a number rounded to the nearest integer.

var number3 = 5.343434;
var number4 = 5.53434343;
console.log(Math.round(number3));
console.log(Math.round(number4));

// Random 

console.log(Math.random());

for(var i = 0; i <= 20; i++){
    console.log(Math.round(Math.random()*6));
}