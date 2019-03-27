// importing packages
const randomWord = require("random-word");
const inquirer = require("inquirer");

// importing Word constructor
const Word = require("./word");

// global variables
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let guessNo;
let currWord;
let placeHolder = "-";
let guessedWord;
let newWord;

// game starts here
initSection();

// function to process user input
function userInput() {

    if (guessNo > 0) {
        inquirer
            .prompt([{
                type: "input",
                message: "Guess a Letter! ",
                name: "guess",
                validate: function (val) {
                    if (alphabet.includes(val.toLowerCase())) {
                        return true;
                    } else {
                        console.log("\x1b[1m", "\x1b[31m", "\nINVALID ENTRY: Enter a letter between a-z", "\x1b[0m");
                        return false
                    }
                }
            }]).then(function (response) {
                currWord = newWord.displayWord(response.guess.toLowerCase()).join('');
                console.log(currWord);

                if (currWord === guessedWord) {
                    console.log("\x1b[1m", "\x1b[32m", "\nYOU WIN! NEXT WORD !!! <Press Ctrl+C to Exit>", "\x1b[0m");
                    // setting up a new game
                    initSection();
                } else if (newWord.guessLetter(response.guess.toLowerCase())) {
                    console.log("\x1b[1m", "\x1b[32m", "\nCORRECT !!!", "\x1b[0m");
                    userInput();
                } else {
                    guessNo--;
                    if (guessNo === 0) {
                        console.log("\x1b[1m", "\x1b[31m", "\nYOU LOSE! The Correct Word is: " + guessedWord + ". NEXT WORD !!! <Press Ctrl+C to Exit>", "\x1b[0m");
                        // setting up a new game
                        initSection();
                    } else {
                        console.log("\x1b[1m", "\x1b[31m", "\nINCORRECT !!! Number of Guesses Remaining: " + guessNo, "\x1b[0m");
                        userInput();
                    }
                }
            })
    }
}

// function to initialize game
function initSection() {
    guessNo     = 15;
    // guess a random word
    guessedWord = randomWord();
    newWord     = new Word(guessedWord)

    // displaying the place holder for the word
    console.log(placeHolder.repeat(guessedWord.length));

    // main function    
    userInput();
}