const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5pc2hrYXJ0aGljayIsImEiOiJja3NwazBmcDMwM3Z2MnZtZGhwcGs1NndiIn0.iDDwGX8nvFuYCFi4P73e7Q&limit=1'
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('unable to connect location services', undefined)
        } else if (body.features.length === 0) {
            callback('unable to find the location .Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude:body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode






















// const  geocodeurl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5pc2hrYXJ0aGljayIsImEiOiJja3NwazBmcDMwM3Z2MnZtZGhwcGs1NndiIn0.iDDwGX8nvFuYCFi4P73e7Q&limit=1'
// request ({url: geocodeurl,json:true}, (error,response) => {

//     if(error){
//         console.log('unable to reach location services')
//     }else if(response.body.features.length===0){
//         console.log('unable to find location')
//     }else{
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude))

// }

// })
