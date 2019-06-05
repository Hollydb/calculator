//business logic
// function add(x, y) {
//   return x + y;
// };
//
// function subtract(x, y) {
//   return x - y;
// };
//
// function multiply(x, y) {
//   return x * y;
// };
//
// function divide(x, y) {
//   return x / y;
// };
//


var equation = [];

  var operation = function () {
  equation.reduce();
  console.log(equation);
};

//user interface logic w/ jquery

$(document).ready(function() {
    console.log( "jquery is workking!" );


    // $("button.addbtn").click(function(event){
    //   event.preventDefault();
    //   var number1 = parseInt($("#input1").val());
    //   var number2 = parseInt($("#input2").val());
    //   var result = add(number1, number2);
    //   $("#output").text(result);
    //   console.log('add button is working!')
    // });

    $(".button1").click(function(){
      console.log("Button clicks");
      $('#display').append("1");
      equation.push(1);
    });

    $(".button2").click(function(){
      console.log("Button clicks");
      $('#display').append("2");
      equation.push(2);
    });
    $(".button3").click(function(){
      console.log("Button clicks");
      $('#display').append("3");
      equation.push(3);
    });
    $(".button4").click(function(){
      console.log("Button clicks");
      $('#display').append("4");
      equation.push(4);
    });
    $(".button5").click(function(){
      console.log("Button clicks");
      $('#display').append("5");
      equation.push(5);
    });
    $(".button6").click(function(){
      console.log("Button clicks");
      $('#display').append("6");
      equation.push(6);
    });
    $(".button7").click(function(){
      console.log("Button clicks");
      $('#display').append("7");
      equation.push(7);
    });
    $(".button8").click(function(){
      console.log("Button clicks");
      $('#display').append("8");
      equation.push(8);
    });
    $(".button9").click(function(){
      console.log("Button clicks");
      $('#display').append("9");
      equation.push(9);
    });
    $(".button0").click(function(){
      console.log("Button clicks");
      $('#display').append("0");
      equation.push(0);
    });
    $(".form-group").click(function(){
      console.log("Button clicks");
      var operator =$("#time").val();
      $('#display').append(operator);
      equation.push("+");
    });
      // $(".buttonsub").click(function(){
      //   console.log("Button clicks");
      //   $('#display').append("-");
      //   equation.push("-");
      // });
      // $(".buttonmultiply").click(function(){
      //   console.log("Button clicks");
      //   $('#display').append("*");
      //   equation.push("*");
      // });
      // $(".buttondivide").click(function(){
      //   console.log("Button clicks");
      //   $('#display').append("/");
      //   equation.push("/");
    // });
    // $(".buttonce").click(function(){
    //   console.log("Button clicks");
    //   $('#display').text(" ");
    //   equation.push(1);
    // });
    // (".buttonce").click(function(){
    //   console.log("Button clicks");
    //   $('#display').append("1");
    //   equation.push(1);
    // });

    $(".colorbtn").click(function(){
      var color = $("#color").val();
      $(".row div, .colorbtn, .colortext").css("background-color",color)
    })

    $(".colortext").click(function(){
      var colortext = $("#color2").val();
      $(".row div, .colorbtn, .colortext").css("color",colortext)
    })


});
