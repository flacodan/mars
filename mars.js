alert('- Starting your Mars adventure -');
alert('Booting up...');
alert('All systems go!');
alert("Let's start!");

let username = '';
while(username === '') {
    username = prompt("Hi there. What's your name?");
}
alert("Hi " + username + " --- Welcome to the Mars Adventure game!");
alert("Yesterday, you received a call from your good friend at NASA.");
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!!");

let excited = '';
while(excited === '') {
    excited = prompt("Are you excited? (Type Y or N)");
}
excited = scrubInput(excited, true);

if(excited.startsWith('Y')) {
    alert("I knew you'd say that. It's so cool that you're going to Mars!");
} else if (excited.startsWith('N')) {
    alert("Well, it's too late to back out now.");
} else {
    alert("Gonna be a rough trip if you can't follow simple instructions...")
}

alert("It's time to pack for your trip to Mars.");
let numSuitcases;
const numbers = /^[0-9]+$/; //regex expression to check for valid numeric input
while (!numbers.test(numSuitcases)) {
    numSuitcases = prompt('How many suitcases do you plan to bring?');
}
numSuitcases = Number(numSuitcases);

if(numSuitcases > 2) {
    alert("That’s way too many. You’ll have to pack more lightly.");
}else {
    alert("Perfect. You’ll certainly fit in the spaceship!");
}

alert("You're allowed to bring one companion animal with you.");
let companionType = prompt('What kind of companion animal would you like to bring?');
let companionName = prompt("What is your companion's name?");
companionType = scrubInput(companionType, true);
companionName = scrubInput(companionName, true);
alert("Cool, so you're bringing " + companionName + " the " + companionType + ".");

alert('NASA has a interior design team offering to outfit your space ship.');
let decorChoice = prompt(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);
decorChoice = scrubInput(decorChoice, true);
let decor;
if(decorChoice === 'A') {
    decor = 'modern minimalist';
} else if (decorChoice === 'B') {
    decor = 'retro space';
} else {
    decor = 'steampunk';
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);
alert(`You crawl into the spaceship with ${companionName} the ${companionType}...`);
let timer = 5;
while (timer > 0) {
    alert(timer + '...');
    timer--;
}
alert("*** LIFTOFF ***");

function scrubInput(inputString, firstLetterCap) {
    const alpha = /^[a-zA-Z0-9 ]+$/; //regex expression to check input is alphanum
    let cleanString = inputString;
    let firstLetter;

    if (!alpha.test(cleanString)){
        return  "z"; //set it to something so it isn't empty
    };

    cleanString = cleanString.trim();

    if(firstLetterCap) {
        cleanString = cleanString.toLowerCase();
        firstLetter = cleanString[0].toUpperCase();
        cleanString = firstLetter + cleanString.slice(1);
    };

    return cleanString;
}