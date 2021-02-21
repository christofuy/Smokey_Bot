
//removes all symbols from input
function symbolRemove() {
      let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
}

const trigger = [
    ['campgrounds','campground'],
    ['parks','park']
];

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



