var pingPong = function(number) {
  if (number % 15 === 0){

  return "PingPong";
} else if (number % 5 === 0) {
  return "Pong";
} else if (number % 3 === 0) {
  return "Ping";
} else {
  return number;
}
};


$(document).ready(function() {
  // debugger;
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    $(".result").append("<li>" + result + "</li>");
    $("#result").show();
  });
});
