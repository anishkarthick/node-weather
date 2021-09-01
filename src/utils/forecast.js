const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=90ce4217a56cd7c4532c50e68465f5e0&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('unable to find the weather services', undefined)
        } else if (body.error) {
            //  console.log(response.body.error)
            callback('unable to find the location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' °C and it feels like ' + body.current.feelslike + '  °C. The localtime is '+ body.location.localtime)
        }
    })

}

module.exports = forecast