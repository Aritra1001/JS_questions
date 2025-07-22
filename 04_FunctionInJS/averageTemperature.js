/**
 * Create a function with name calculateAverage that takes threshold pressure as a parameter and returns the average temperature of the cities with a pressure value above a certain threshold.
 * Please note that the function should only take one parameter
 *
 *
 * .
 */

// Complete the function calculateAverage
const weather = [
  { city: "New York", temperature: 50, pressure: 1015 },
  { city: "Los Angeles", temperature: 70, pressure: 1010 },
  { city: "Chicago", temperature: 40, pressure: 1012 },
  { city: "Houston", temperature: 75, pressure: 1020 },
  { city: "Miami", temperature: 80, pressure: 1017 },
];
const pressureThreshold = 1015;
function calculateAverage(pressureThreshold) {
  let cityFiltered = weather.filter(
    (_city) => _city.pressure >= pressureThreshold
  );
  let averageTemp =
    cityFiltered.reduce(
      (totalTemp, _currCity) => totalTemp + _currCity.temperature,
      0
    ) / cityFiltered.length;
  console.log("averageTemp", averageTemp);
  return averageTemp.toFixed(1);
}
console.log(calculateAverage(pressureThreshold));
//Output : 68.3
