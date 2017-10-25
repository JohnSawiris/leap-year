$(document).ready(function() {
  $("form#year").submit(function(event) {
    event.preventDefault();

    var userYear = parseInt($("#inputYear").val());

    var isLeapYear = function(year) {
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        console.log("hello I'm 4");
      }
      else {
        return false;
      }
    }
    console.log(isLeapYear(userYear));
  });
});
