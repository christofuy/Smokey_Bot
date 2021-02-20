// const parkcode_dict = require("/")

//Splits string sentence into list.
function sentence_to_list(sentence)
{
    sentence = sentence.toUpperCase();
    return sentence.split(" ");
}

//Takes in word list, filters out common words to reduuce length of array.
function extract_park_name(word_list)
{
    var search_terms = ['WHERE', 'IS', 'THE', "AT", "WHEN", "WHAT", "TIME", "LOCATED", "OPEN", "CLOSED", "HOURS", "OPERATING", "HOW", "COST", "DOES", "IT"]; //Can maybe make this a global variable?
    let filtered_park_list = word_list.filter(sw => !search_terms.includes(sw));

    

    //find park code here using filtered_park_list?
    return filtered_park_list;
}

//Gets keyword of the user's question, and calls that function to get info from NPS API.
function extract_question(word_list)
{
    var inquiry = [];
    if (word_list.includes("HOURS") || word_list.includes("HOUR") || word_list.includes("OPERATING") || word_list.includes("OPERATION"))
    {
        inquiry = ["operatingHours", "description"]; 
    }
    else if (word_list.includes("WEATHER") || word_list.includes("CLIMATE"))
    {
        inquiry = ["weatherInfo"];        
    }
    else if (word_list.includes("DESCRIPTION") || (word_list.includes("TELL") && word_list.includes("ME") && word_list.includes("ABOUT")))
    {
        inquiry = ["description"];
    }
    else if (word_list.includes("COST") || word_list.includes("ENTRANCE") || word_list.includes("FEES"))
    {
        inquiry = ["entranceFees"]; //multiple options for entrance fees, maybe 
    }

    return inquiry;
}

var hours_trigger = [];
var location_trigger = [];