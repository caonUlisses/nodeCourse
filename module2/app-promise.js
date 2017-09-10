const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand  : true,
            alias   : 'address',
            describe: 'Address to fetch weather for',
            string  : true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl     = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        console.log('Not found');
        throw new Error('Address not found');
    }
    let key        = '02b3f46782333a2455e44a8d3f51ae13';
    let lat        = response.data.results[0].geometry.location.lat;
    let lng        = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    let temperature         = (((response.data.currently.temperature)-32)*5/9).toFixed(2);
    let apparentTemperature = (((response.data.currently.apparentTemperature)-32)*5/9).toFixed(2);
    console.log(`It's currently ${temperature} and it feels like ${apparentTemperature}`)
}).catch((e) => {
    if (e.code === 'ENOTFOUND') console.log('Unable to connect to api');
});