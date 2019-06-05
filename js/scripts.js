//business logic
function add(x, y) {
  return x + y;
};

function subtract(x, y) {
  return x - y;
};

function mutliply(x, y) {
  return x * y;
};

function divide(x, y) {
  return x / y;
};


//user interface logic w/ jquery

$(document).ready(function() {
    console.log( "jquery is workking!" );
    $("form#add").submit(function(event){
      event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());

      alert(add(number1, number2));

    });
});
