// ----------------------------------------------------------- date header

let currentHour = moment().format("HH");
var clock = document.getElementById("#clock");
var today = dayjs();

$("#clock").text(today.format("MMM D, YYYY"));

// ---------------------------------------------------------- local storage

$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));
$("#23 .description").val(localStorage.getItem("23"));

$(".saveBtn").click(function () {
  var text = $(this).siblings("textArea").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

// ---------------------------------------- textarea past, present, future

$(".time").each(function () {
  var currentTime = moment().format("HH");
  var hour = $(this).attr("id");

  if (currentTime == hour) {
    $(this).removeClass("future");
    $(this).removeClass("past");
    $(this).addClass("present");
  } else if (currentTime < hour) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentTime > hour) {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("past");
  }
});
