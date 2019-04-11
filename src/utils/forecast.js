const request = require("request");

const forecast = (coordinates, callback) => {
  lat = coordinates.latitude;
  long = coordinates.longitude;
  const url = `https://api.darksky.net/forecast/1f50f668ca68544fe1d6781773164098/${lat},${long}`
  request({ url, json: true }, (error, response) => {
    let weatherObj = response.body
    if (error) {
      callback("Unable to reach the API, please check your connection", undefined);
    } else if (weatherObj.error) {
      callback( `Error: Unable to find location`, undefined);
    } else {
      callback( undefined,  {
        temp: weatherObj.currently.temperature, 
        precipitation: weatherObj.currently.precipProbability, 
        summary: weatherObj.daily.summary
      }) 
    }
  })
} 

module.exports = forecast;
//obj will be the response body and the property currently has all info about weather in specified location
//{url: url} is the same as {url} because of destructuring shorthands