
// Word lists to draw from
let holdFirstWords = ["Surely","Perhaps", "It is Likely", "In Fact", "Maybe"];
let holdSecondWords = ["You should", "You should not", "Try to", "Attempt to", "Perchance you"];
let holdThirdWords = ["Think about it", "Rest on it", "Write it out", "Talk to a friend about it", "Ask an expert"];

// Gets random value from array
function generateRandom(){
    return Math.floor((Math.random() * 5));
}

// Hold document value
let holdMessage = document.getElementById("Message");

function setValues(){
    let randomMessage = holdFirstWords[generateRandom()] + " " + holdSecondWords[generateRandom()] + " " + holdThirdWords[generateRandom()];
    holdMessage.innerText = randomMessage;
}


