// ----------------------------------------------------------- date header

var clock = document.getElementById("#clock");
var today = dayjs();
console.log(today);
$("#clock").text(today.format("MMM D, YYYY"));
