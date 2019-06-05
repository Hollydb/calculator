//business logic
function add(x, y) {
  return x + y;
};

function subtract(x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
};

function divide(x, y) {
  return x / y;
};


//user interface logic w/ jquery

$(document).ready(function() {
    console.log( "jquery is workking!" );


    $("button.addbtn").click(function(event){
      event.preventDefault();
      var number1 = parseInt($("#input1").val());
      var number2 = parseInt($("#input2").val());
      var result = add(number1, number2);
      $("#output").text(result);
      console.log('add button is working!')
    });

    $("button.subtractbtn").click(function(event){
      event.preventDefault();
      var number1 = parseInt($("#input1").val());
      var number2 = parseInt($("#input2").val());
      var result = subtract(number1, number2);
      $("#output").text(result);
      console.log('subtract button is working!')
    });

    $("button.multiplybtn").click(function(event){
      event.preventDefault();
      var number1 = parseInt($("#input1").val());
      var number2 = parseInt($("#input2").val());
      var result = multiply (number1, number2);
      $("#output").text(result);
      console.log('multiply button is working!')
    });

    $("button.dividebtn").click(function(event){
      event.preventDefault();
      var number1 = parseInt($("#input1").val());
      var number2 = parseInt($("#input2").val());
      var result = divide(number1, number2);
      $("#output").text(result);
      console.log('divide button is working!')
    });
});
