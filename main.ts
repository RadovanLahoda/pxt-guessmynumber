
let min = 1;
let max = 99;
let currentGuess = Math.floor((min + max) / 2);
let attempts = 0;

console.log("Hello. Think of a number between 1 to 99")
basic.pause(1000)
console.log("Press A if u want to indicate that your number is lower or B if higher")
basic.pause(1000)
console.log("Press Microbit logo if i guessed your number!")
basic.pause(1000)



attempts++;
console.log("Attempt " + attempts + ": Is your number " + currentGuess + "?");

input.onButtonPressed(Button.A, function () {
    max = currentGuess - 1;
    currentGuess = Math.floor((min + max) / 2);
    attempts++;
    console.log("Attempt " + attempts + ": Is your number " + currentGuess + "?");
});

input.onButtonPressed(Button.B, function () {
    min = currentGuess + 1;
    currentGuess = Math.floor((min + max) / 2);
    attempts++;
    console.log("Attempt " + attempts + ": Is your number " + currentGuess + "?");
});

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    console.log("I guessed it! Your number is " + currentGuess + ".");
    console.log("It took me " + attempts + " attempts.");
    min = 1;
    max = 99;
    attempts = 0;
    currentGuess = Math.floor((min + max) / 2);
    attempts++;
    console.log("New Game. Think of a number between 1 and 99.");
    console.log("Attempt " + attempts + ": Is your number " + currentGuess + "?");
});