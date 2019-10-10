(function () {

    document.write("hello from hangman-lite.js");

    var word = "Tacos"
    let letter = "a";

    let letterCount = word.split(letter).length - 1
    
    if (word.indexOf(letter) >= 0) {
        document.write('Yeah, the letter ' + letter + ' exists ' + letterCount + ' times in my word')
    } else {
        document.write("Nope, that letter doesn't exist in my word")
    }


})();