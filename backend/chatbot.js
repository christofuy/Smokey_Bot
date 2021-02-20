//created event listener, doesnt start until html is loaded
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = document.getElementById("input").value;
            document.getElementById("user").innerHTML = input;
            output(input);   
    }
  });
});

//checks for intput after enter is pressed
if (e.code === "Enter") {
    let input = inputField.value;
    console.log(`I typed '${input}'`)
  }

//removes all symbols from input
function symbolRemove() {
      let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
}

const trigger = [
    ['campgrounds','campground'],
    ['parks','park']
];

//need to create a function that allows for a full conversation rather than an input and response
const reply = [
    ['Input the full official name of the park that the campground is on (eg. \"Yellowstone National Park\" not \"Yellowstone\")'],
    ['Input the full official name of the park that you want information on (eg. \"Yellowstone National Park\" not \"Yellowstone\")']
];

const alternative = [
    'Sorry, I don\'t understand what you are saying, please try again'
];

//compares trigger and reply arrays
function compare(triggerArray, replyArray, text) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == text) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }

  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    //compares input to trigger and reply
    if (compare(trigger, reply, text)) {
        product = compare(trigger, reply, text);
      } else {
        product = alternative[Math.floor(Math.random() * alternative.length)];
      }
      //update DOM
      addChat(input, product);
    //takes input and clears the input 
    document.getElementById("chatbot").innerHTML = product;
    speak(product);
    document.getElementById("input").value = "";
    }

