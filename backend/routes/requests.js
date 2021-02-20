//const https = require('https')

//const campground = 'https://developer.nps.gov/api/v1/' + endpoint +'?parkCode=' + parkCode + '&api_key=' + process.env.API_KEY

//const req = https.request(campground, res => {
//console.log(req.path)
////path will be what info the user wants from the park eg (description, time, etc.)
//});
//
//
const express = require('express')
const axios = require('axios')
const router = express.Router()

router.post('/chat', async (req, res) => {
	//TODO: Need to get user input from req object
	//


	const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
	const data = response.data

	//TODO: Change message to what Smokey will actually say; dont' send back data
	res.json({
		msg: 'Hello World',
		data
	})
})


module.exports = router
