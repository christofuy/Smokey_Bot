const express = require('express')
const axios = require('axios')
const router = express.Router()
const parser = require('../parse_sentence')


const {sentence_to_list, extract_park_code, extract_question} = parser

router.post('/chat', async (req, res) => {
	//Raw User Input
	const {msg} = req.body
	console.log(msg)

	let data = {}

	//Parse msg here
	const word_list = sentence_to_list(msg)
	const park_code = extract_park_code(word_list)

	if (park_code === 'Park not found') {
		res.json({err: 'Can you specify the National Park in your question?'})
		return
	}


	//Request NPS API
	const response = await axios.get('https://developer.nps.gov/api/v1/parks', {
		headers: {
			'X-Api-Key': 'dDdBtATvdfZOLDl4JYqNr9mplwap7H2GPrJKutxo'
		},
		params: {
			'parkCode': park_code
		}
	})
	let payload = response.data.data[0]


	//Craft Message
	const fields = extract_question(word_list)
	if (!fields.length) {
		res.json({err: "I do not understand. Please rephrase your question."})
		return
	}
	console.log('Fields: ', fields)

	fields.forEach(value => {
		if (value instanceof Array) {
			data = payload[value[0]] + "; " + payload[value[1]]
			return
		}
		data = payload[value]
		if (data instanceof Array) data = data[0]
		console.log(data)
		payload = data;
	})

	//Send back response
	res.json({data})
})


module.exports = router
