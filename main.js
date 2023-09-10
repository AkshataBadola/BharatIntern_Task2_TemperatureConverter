document.addEventListener("DOMContentLoaded", function () {
  const celsiusInput = document.getElementById("input-celsius");
  const fahrenheitInput = document.getElementById("input-fahrenheit");
  const kelvinInput = document.getElementById("input-kelvin");
  const convertButton = document.getElementById("convert-button");

  const roundToTwoDP = (num) => {
    return num.toFixed(2);
  };

  const convertTemperature = () => {
    const celsiusTemp = parseFloat(celsiusInput.value);

    if (!isNaN(celsiusTemp)) {
      const fahrenheitTemp = (celsiusTemp * 9/5) + 32;
      const kelvinTemp = celsiusTemp + 273.15;

      fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
      kelvinInput.value = roundToTwoDP(kelvinTemp);
    } else {
      alert("Please enter a valid temperature in Celsius.");
    }
  };

  convertButton.addEventListener("click", convertTemperature);
});

