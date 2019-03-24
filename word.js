// importing the letter.js
var Letter = require( "./letter" );

// defining word constructor
var Word = function( strWord ) {
    this.strWord    = strWord.split(" ");
    this.letterArr  = [];

    this.displayWord = function() {
        for( var i=0; i < strWord.length; i++){
            this.letterArr.push( new Letter(this.strWord[i]))
        }      
        console.log( Letter.strCompare( "a" ));
    }
}