const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoia29uc3RhbnRpbmt1a3NvdiIsImEiOiJja2xseDdmY3MwM292MnBubjRvOGZneXEzIn0.Xx23kFr8xU5SJc6TF-UkGA&limit=1`;

  request({ url, json: true }, (error, response, { features }) => {
    if (error) {
      callback('Unable to connect to location service1', undefined);
    } else if (features.length === 0) {
      callback('Unable to find location. Please, try again.', undefined);
    } else {
      callback(undefined, {
        longitude: features[0].center[0],
        latitude: features[0].center[1],
        location: features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
