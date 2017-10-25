// backend logic
var isLeapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }
  else {
    return false;
  }
}

$(document).ready(function() {
  $("form#year").submit(function(event) {
    event.preventDefault();
    var userYear = parseInt($("#inputYear").val());
    var result = isLeapYear(userYear);

    //front end logic
    if (!result) {
      $(".not").show();
    }else {
      $(".not").hide();
    }

    $("#result").show();
  });
});
