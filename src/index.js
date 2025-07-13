let selectedCities = [];

function updateTime() {
  let localElement = document.querySelector("#local");
  let localTimeZone = moment.tz.guess();
  let localMoment = moment().tz(localTimeZone);

  let localNameElement = localElement.querySelector(".name");
  let localDateElement = localElement.querySelector(".date");
  let localTimeElement = localElement.querySelector(".time");

  localNameElement.innerHTML = localTimeZone.replace("_", " ").split("/")[1];
  localDateElement.innerHTML = localMoment.format("MMMM D, YYYY");
  localTimeElement.innerHTML = localMoment.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  selectedCities.forEach((cityTimeZone) => {
    let cityMoment = moment().tz(cityTimeZone);
    let cityElement = document.querySelector(
      `[data-timezone="${cityTimeZone}"]`
    );
    if (cityElement) {
      cityElement.querySelector(".date").innerHTML =
        cityMoment.format("MMMM D, YYYY");
      cityElement.querySelector(".time").innerHTML = cityMoment.format(
        "HH:mm:ss [<small>]A[</small>]"
      );
    }
  });
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone || selectedCities.includes(cityTimeZone)) return;

  selectedCities.push(cityTimeZone);

  let cityMoment = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML += `  
    <div class="city" data-timezone="${cityTimeZone}">
    <div class="city-header">
    <h2>${cityName}</h2>
        <div class="date">${cityMoment.format("MMMM D, YYYY")}</div>
      </div>
      <div class="time">${cityMoment.format(
        "HH:mm:ss [<small>]A[</small>]"
      )}</div>
    </div>`;
}

function removeCities(event) {
  if (event.target.classList.contains("remove-btn")) {
    const timeZone = event.target.getAttribute("data-remove");
    selectedCities = selectedCities.filter((tz) => tz !== timeZone);
    const cityElement = document.querySelector(`[data-timezone="${timeZone}"]`);
    if (cityElement) {
      cityElement.remove();
    }
  }
}

function refreshPage() {
  location.reload();
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

let refreshButton = document.querySelector("#refresh-button");
refreshButton.addEventListener("click", refreshPage);

let removeCity = document.querySelector("#cities");
removeCity.addEventListener("click", removeCities);
