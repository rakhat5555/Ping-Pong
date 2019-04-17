var pingPong = function(number) {
  var output=[];
  for(var i=1; i<=number; i++) {
    if (i % 15 === 0){
      output.push("PingPong");
    } else if (i % 5 === 0) {
      output.push("Pong");
    } else if (i % 3 === 0) {
      output.push("Ping");
    } else {
      output.push(i);
    }
  }
  return output;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    result.forEach(function(total) {
      $(".result").append("<li>" + total + "</li>");
    });
  });
});
