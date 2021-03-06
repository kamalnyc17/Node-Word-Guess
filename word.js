// importing the letter.js
const Letter = require( "./letter" );

// global variables
let placeHolder = "-";

// defining word constructor
let Word = function( strWord ) {
    this.letterArr  = strWord.split("").map((item) => {return new Letter(item, false)}); // initializing letter object with the letters of the word & isFound=false
    this.tempWord   = placeHolder.repeat( this.letterArr.length ).split("");  // initializing the tempWord with placeholder "-"
}

// recreating the word with a combination of letter and -
Word.prototype.displayWord = function( strLetter ) {
    for( let i=0; i < this.letterArr.length; i++){
        this.tempWord[i] = this.letterArr[i].strCompare( strLetter )
    }      
    this.guessLetter( strLetter );
    return this.tempWord;
}

// function to check if the input letter was correct
Word.prototype.guessLetter = function( strLetter ) {   
    let isLetterFound = "no";
    for( let i=0; i < this.letterArr.length; i++){
        if (this.letterArr[i].checkIsFound( strLetter )){
            this.letterArr[i].isFound = true;
            isLetterFound = "yes";
        }
    }      

    if (isLetterFound === "yes") {
        return true;
    } return false;
}

// exporting the Word constructor
module.exports = Word;
