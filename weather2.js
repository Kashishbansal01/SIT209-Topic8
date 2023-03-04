let request = require('request');

let apiKey = 'eb0944578e28d477389189382c0c1033';
let location = 'Melbourne, AU'; // Specify the location with country code
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; // Add units=metric to convert to Celsius

request(url, function (err, response, body) {
  if (err) {
    console.log('error:', err);
  } else {
    let weather = JSON.parse(body); // Parse the JSON response
    console.log(`Current temperature in ${location} is ${weather.main.temp}°C`); // Print the current temperature
  }
});
