const request = require("request");

const geoCode = (location, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1Ijoiam9lZWxvcmVuem8iLCJhIjoiY2p1YTRjaTVyMDB4MjRmcDIyOXUwbGszcCJ9.tgQKk7SqpBJb1jrBVSR8lQ&limit=1`;
  
  request({url, json: true}, (error, response) => {
    const res = response.body
    if (error) {
      callback("Unable to reach the API, please check your connection", undefined);
    } else if (res.features.length === 0) {
      callback("City not found, please check spelling", undefined);
    } else {
      const long = res.features[0].center[0];
      const lat = res.features[0].center[1];
      const name = res.features[0].place_name;
      const geoObj = {long, lat, location: name};
      callback(undefined, geoObj)
    }
  })
}

module.exports = geoCode;

// geoCode exports data
// data is an object and has 3 properties
// longitude, latitude, and location