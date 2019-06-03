// Basic Math Calculation

// var add = function (num1, num2){
// 	return num1 + num2;
// }
// var subtract = function (num1, num2){
// 	return num1 - num2;
// }
// var multiply = function (num1, num2){
// 	return num1 * num2;
// }
//
// var divide = function (num1, num2){
// 	return num1 / num2;
// }
// // Input
// var num1 = parseInt(prompt("Enter a number."));
// var num2 = parseInt(prompt("Enter another number."));
//
// var result = divide (num1, num2)
//
// alert (result)

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
//
// Converts Celsius to Fahrenheit
// var tempC = function (num1) {
//   return (num1 * 1.8) + 32;
// }
// var num1 = parseInt(prompt("Enter the temp in Celsius:"))
// var result = tempC (num1);
// alert ("That is " + (result) + " degrees Celsius.";

// Converts Fahrenheit to Celsius
// var tempF = function (num1) {
//   return (num1 - 32) * .5556;
// }
// var num1 = parseInt(prompt("Enter the temp in Fahrenheit:"))
// var result = tempF (num1);
// alert ("That is " + (result) + " degrees Fahrenheit.");

//Converts Gallons to Liters
// var gallon = function (num1) {
//   return num1 * 3.78541;
// }
//
// var num1 = parseFloat (prompt("Enter in the number of gallons:"))
// var result = gallon (num1);
// alert ((num1) + " gallons is " + (result) + " liters.");

// var str = 'twas the night before Xmas...';
// var newstr = str.replace (/xmas/i, 'Christmas');
// alert (newstr);

// var win = function (sentence) {
//   // return sentence.charAt(0).toUpperCase() + sentence.substr (1).slice(0);
//   return sentence + sentence.charAt(sentence.length-1).toUpperCase();
// }
// var = win {
//   var last = function (sentence) {
//     return sentence.charAt(sentence.length-1).toUpperCase();
//   }
//   var first = function (sentence) {
//     return sentence.charAt(0).toUpperCase();
//   }
//
// }
// alert (result);
var first = function (sentence) {
  return sentence.charAt(0).toUpperCase();
}
var last = function (sentence) {
    return sentence.charAt(sentence.length-1).toUpperCase();
  }

var sentence = prompt ("Enter a sentence");
var result = first (sentence) + sentence.substr (1).slice(0, -1) + last (sentence);
alert (result);
