function sentence_to_list(sentence)
{
    //Splits string sentence into list, removes all punctuation.
    sentence = sentence.toUpperCase();
    sentence = sentence.replace(/[^\w\s]|_/g, "");
    return sentence.split(" ");
}

function extract_park_name(word_list)
{
    //Takes in word list, filters out common words to reduuce length of array.
    var search_terms = ['WHERE', 'IS', 'THE', "AT", "WHEN", "WHAT", "TIME", "LOCATED", "OPEN", "CLOSED", "HOURS", "OPERATING"]; //Can maybe make this a global variable?
    let filtered_park_list = word_list.filter(sw => !search_terms.includes(sw));
    return filtered_park_list;
}

var hours_trigger = [];
var location_trigger = [];