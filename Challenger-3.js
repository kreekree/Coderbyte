/* Using the JavaScript language, have the function 
LetterChanges(str) take the str parameter being passed 
and modify it using the following algorithm. Replace every 
letter in the string with the letter following it in the alphabet 
(ie. c becomes d, z becomes a). Then capitalize every vowel in this new 
string (a, e, i, o, u) and finally return this modified string.  */

function LetterChanges(str) { 

    var newStr = str.split("");
    var myregex = /[a-zA-Z]/;


    function isAlpha(char) {
        if (myregex.test(char)) {
            return true;
        } else {
            return false;
        }
    };

    var charArr = newStr.map(function(item, index) {
            if (isAlpha(item)) {
                return item.charCodeAt() + 1;
            } else {
                return item.charCodeAt();
            }
    });

    var charToStr = charArr.map(function(item, index) {
        return String.fromCharCode(item);
    });

    var toUpper = charToStr.map(function(item, index) {
        if (item === 'a' || item === 'e'|| item === 'i' || item === 'o' || item === 'u' ) {
            return item.toUpperCase();
        } else {
            return item;
        }
        
    });

 

    var myStr = toUpper.join("");
    // code goes here
    return myStr; 
           
  }
     
  // keep this function call here 
  //LetterChanges(readline());      

  console.log(LetterChanges("hello*3")); // should return "Ifmmp*3"
  LetterChanges("fun times!"); // should return "gvO Ujnft!"