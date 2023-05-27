// ----------------------------------------------------------- date header

var clock = document.getElementById("#clock");
var today = dayjs();

$("#clock").text(today.format("MMM D, YYYY"));

// ---------------------------------------------------------- local storage

localStorage.getItem("hour9");
localStorage.getItem("hour10");
localStorage.getItem("hour11");
localStorage.getItem("hour12");
localStorage.getItem("hour13");
localStorage.getItem("hour14");
localStorage.getItem("hour15");
localStorage.getItem("hour16");
localStorage.getItem("hour17");
localStorage.getItem("hour18");

$(".saveBtn").click(function () {
  var text = $(this).siblings("textArea").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

// ---------------------------------------- textarea past, present, future

$("textAreas").each(function () {
  var textAreas = parseInt($(this).attr("id").split("-")[1]);

  if (currentHour == textAreas) {
    $(this).addClass("present");
  } else if (currentHour < textAreas) {
    this.addClass("future");
    this.removeClass("present");
  } else if (currentHour > textAreas) {
    this.removeClass("future");
    this.addClass("past");
  }
});
