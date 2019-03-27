// creating the Letter constructor
let Letter = function (strCorrect, isFound) {
    this.strCorrect = strCorrect.toLowerCase();
    this.isFound = isFound;
}

// fuction to take a letter and return either letter or -
Letter.prototype.strCompare = function (strInput) {
    if (!this.isFound) {
        if (this.strCorrect === strInput) {
            return strInput;
        } return "-";
    } return this.strCorrect;
}
// function to check if the input letter is correct
Letter.prototype.checkIsFound = function (strInput) {
    if (this.strCorrect === strInput) {
        return true;
    }
    return false;
}

// exporting the letter constructor
module.exports = Letter;