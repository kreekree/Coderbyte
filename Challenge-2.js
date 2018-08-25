// Using the JavaScript language, have the function FirstReverse(str) 
// take the str parameter being passed and return the string in reversed 
// order. For example: if the input string is "Hello World and Coders" then 
// your program should return the string sredoC dna dlroW olleH. 

function FirstReverse(str) { 

    var array = str.split("");
    console.log(array);

    var reverseStr = array.map(function(item, index, arr) {
        return arr[(arr.length - 1) - index];
    });

    var newStr = reverseStr.join("");

    // code goes here  
    return newStr;
           
  }
     
  // keep this function call here 
 // FirstReverse(readline());
 
 console.log(FirstReverse("coderbyte")); // should return etybredoc
 console.log(FirstReverse("I Love Code")); // should return edoC evoL I

  