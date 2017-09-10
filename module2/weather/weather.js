const request = require('request');

let getWeather = (latitude, longitude, callback) => {
    let key = '02b3f46782333a2455e44a8d3f51ae13';
    request({
        url : `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect to Api server');
        } else {
            callback(undefined, {
                temperature        : parseFloat(((body.currently.temperature)-32)*5/9).toFixed(2),
                apparentTemperature: parseFloat(((body.currently.apparentTemperature)-32)*5/9).toFixed(2)
            });
        }
    });
}
    
module.exports.getWeather = getWeather;