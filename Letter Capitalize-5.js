/* Challenge

Using the JavaScript language, have the function LetterCapitalize(str) take 
the str parameter being passed and capitalize the first letter of each word. 
Words will be separated by only one space.  */

function LetterCapitalize(str) {
    
    var arr = str.split(" ");
    var capArray = [];
  
    for (let i = 0; i < arr.length; i++) {
        var newStr = "";

        for (let j = 0; j < arr[i].length; j++) {
            if (j === 0) {
                newStr = newStr + arr[i][j].toUpperCase();
            } else {
                newStr = newStr + arr[i][j];
            }
        }

        capArray.push(newStr);
    }

    var capString = capArray.join(" ");

    return capString;
}


console.log(LetterCapitalize("hello world")); // "Hello World"
console.log(LetterCapitalize("i ran there")); // "I Ran There"
