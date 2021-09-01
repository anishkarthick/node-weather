const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=90ce4217a56cd7c4532c50e68465f5e0&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('unable to find the weather services', undefined)
        } else if (body.error) {
            //  console.log(response.body.error)
            callback('unable to find the location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees and it feels like ' + body.current.feelslike + ' degrees')

        }
    })

} 

module.exports = forecast






















// const url ='http://api.weatherstack.com/current?access_key=8d6f5f97daed482f823937774113ebc8&query=37.8267,-122.4233&units=f'

// //  const data = JSON.parse(response.body)
// //     console.log(data.current)
// request ({url: url,json:true}, (error,response) => {
// if(error) {
//     console.log('unable to find weather services')
// }else if(response.body.error){
//     console.log('unable to find the location')

// }else{
//     console.log(response.body.current.weather_descriptions + '. It is currently ' + response.body.current.temperature + ' degrees and it feels like ' + response.body.current.feelslike+ ' degrees' )}
// })
