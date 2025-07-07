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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityNameElement = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `  
    <div class="city">
      <div>
          <h2>${cityNameElement}</h2>
          <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "HH:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>
    </div>`;
}

updateLocalTime();
setInterval(updateLocalTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
