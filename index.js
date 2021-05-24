// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts
}

wrapGifts(gifts);


const messages = [];

function writeCards(names, event) {

    for (let i = 0; i < names.length; i++) {
    let thankYou = `Thank you, ${names[i]}, for the wonderful ${event} gifts!`;
    messages.push(thankYou)
    }
   
return messages
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countDown(posInteger) {
    let i = 0
    while (posInteger >= 0) {
      console.log(posInteger--)
    }
  }
  
  countDown(20)
