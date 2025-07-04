function updateLocalTime() {
  let localElement = document.querySelector("#local");
  let localDateElement = localElement.querySelector(".date");
  let localTimeElement = localElement.querySelector(".time");
  let localTime = moment().tz("Australia/Brisbane");

  localDateElement.innerHTML = moment().format("MMMM d, YYYY");
  localTimeElement.innerHTML = localTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

updateLocalTime();
setInterval(updateLocalTime, 1000);
