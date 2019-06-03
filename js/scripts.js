// Basic Math Calculation

var add = function (num1, num2){
	return num1 + num2;
}
var subtract = function (num1, num2){
	return num1 - num2;
}
var multiply = function (num1, num2){
	return num1 * num2;
}

var divide = function (num1, num2){
	return num1 / num2;
}
// Input
var num1 = parseInt(prompt("Enter a number."));
var num2 = parseInt(prompt("Enter another number."));

var result = divide (num1, num2)

alert (result)

// BMI Calculation
// var bmi = function (weight, height ) {
//   return (703 * weight) / (height * height);
// }
//
// var weight = parseFloat(prompt("Enter your weight in pounds:"));
// var height = parseFloat(prompt ("Enter your height in inches:"));
//
// var result = bmi (weight, height).toFixed(1);
// alert ((result) + " This number actually means NOTHING");
