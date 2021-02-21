const parkCode_dict = require("./dicts/parkcode_dict")

//Splits string sentence into list.
function sentence_to_list(sentence) {
	sentence = sentence.toUpperCase();
	return sentence.split(" ");
}

//Takes in word list, filters out common words to reduuce length of array.
function extract_park_code(word_list) {
	var search_terms = ['WHERE', 'IS', 'THE', "AT", "WHEN", "WHAT", "TIME", "LOCATED", "OPEN", "CLOSED", "HOURS", "OPERATING", "HOW", "COST", "DOES", "IT", "NATIONAL", "PARK", "OF"]; //Can maybe make this a global variable?
	var filtered_park_list = word_list.filter(sw => !search_terms.includes(sw));

	for (let key in parkCode_dict) {
		let temp_key = key.toUpperCase();
		let temp_list = temp_key.split(" ");
		temp_list.pop();
		temp_list.pop();
		console.log(filtered_park_list.length);
		for (var i = 0; i < filtered_park_list.length; i++) {
            console.log(filtered_park_list[i]);
			if (temp_list.includes(filtered_park_list[i])) {
                if (temp_list.includes(filtered_park_list[0]))
                {
                    return parkCode_dict[key];
                }
			}
		}
	}
	return "Park not found"; //only returns here if park was not found
}

//Gets keyword of the user's question, and calls that function to get info from NPS API.
function extract_question(word_list) {
	var inquiry = [];
	if (word_list.includes("HOURS") || word_list.includes("HOUR") || word_list.includes("OPERATING") || word_list.includes("OPERATION")) {
		inquiry = ["operatingHours", "description"];
	}
	else if (word_list.includes("WEATHER") || word_list.includes("CLIMATE")) {
		inquiry = ["weatherInfo"];
	}
	else if (word_list.includes("DESCRIPTION") || (word_list.includes("TELL") && word_list.includes("ME") && word_list.includes("ABOUT"))) {
		inquiry = ["description"];
	}
	else if (word_list.includes("COST") || word_list.includes("ENTRANCE") || word_list.includes("FEES")) {
		inquiry = ["entranceFees", ["cost", "description"]]; //multiple options for entrance fees, maybe 
	}
    else if ((word_list.includes("WHERE") && word_list.includes("IS")) || (word_list.includes("WHAT") && word_list.includes("STATE")) || (word_list.includes("WHAT") && word_list.includes("CITY"))) {
        inquiry = ["addresses",["city", "stateCode"]];
    }
	return inquiry;
}

var hours_trigger = [];
var location_trigger = [];


module.exports = {sentence_to_list, extract_park_code, extract_question}
