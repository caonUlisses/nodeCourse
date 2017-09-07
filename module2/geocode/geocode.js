const request = require('request');

let geocodeAddress = (address) => {

    let encodedAddress = encodeURIComponent(address);
    
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to Google service');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find address');
        } else if (body.status === 'OK') {
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Address: ${body.results[0].geometry.location.lat}`);
            console.log(`Address: ${body.results[0].geometry.location.lng}`);
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;