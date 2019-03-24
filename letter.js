// creating the Letter constructor
var Letter = function( strCorrect, isFound) {
    this.strCorrect = strCorrect;
    this.isFound    = isFound;

    this.strCompare = function( strInput ) {
        if (this.strCorrect === strInput){
            return strInput;
        } return "-";
    }

    this.checkIsFound   = function( strInput ) {
        if (this.strCorrect === strInput ) {
            this.isFound= true;
        }
    }
}

// exporting the letter constructor
module.exports = Letter;