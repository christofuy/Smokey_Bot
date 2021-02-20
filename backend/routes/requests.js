const https = require('https')
const parks = {
    hostname : 'https://developer.nps.gov/api/v1',
    path: '/parks',
    method : 'GET'
}

const req = https.request(parks, res => {
    
})