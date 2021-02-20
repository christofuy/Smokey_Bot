const https = require('https')

const campground = 'https://developer.nps.gov/api/v1/' + endpoint +'?parkCode=' + parkCode + '&api_key=' + process.api.env.API_KEY

const req = https.request(campground, res => {
    console.log(req.path)
    //path will be what info the user wants from the park eg (description, time, etc.)
});