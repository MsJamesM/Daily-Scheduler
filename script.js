// ----------------------------------------------------------- date header

let currentHour = moment().format("HH");
var clock = document.getElementById("#clock");
var today = dayjs();

$("#clock").text(today.format("MMM D, YYYY"));

// ---------------------------------------------------------- local storage

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));

$(".saveBtn").click(function () {
  var text = $(this).siblings("textArea").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

$("#clearFieldsBtn").click(function (event) {
  event.preventDefault;
  $("textarea").val("");
  localStorage.clear();
});

// ---------------------------------------- textarea past, present, future

$(".time-Block").each(function () {
  var timeBlock = parseInt($(this).attr("id").split("-")[1]);

  if (timeBlock === currentHour) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeclass("future");
  } else if (timeBlock < currentHour) {
    $(this).removeClass("future");
    $(this).removeClass("past");
    $(this).addClass("present");
  } else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
});
