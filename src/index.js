function updateTime() {
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");

  brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM D, YYYY");
  brisbaneTimeElement.innerHTML = brisbaneTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML += `  
    <div class="city">
      <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "HH:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
      </div>
    </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
