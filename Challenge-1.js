// Using the JavaScript language, have the function 
// FirstFactorial(num) take the num parameter being passed 
// and return the factorial of it (e.g. if num = 4, 
// return (4 * 3 * 2 * 1)). For the test cases, the
// range will be between 1 and 18 and
// the input will always be an integer.

function FirstFactorial(num) {

    var array = [];

    for (var i = num; i > 0; i--) {
        array.push(i);
    }

    num = array.reduce(function(item, value) {
        return item * value;
    });

    // code goes here
    return num;
}

//keep this function call here
console.log(FirstFactorial(4)); // should return 24
console.log(FirstFactorial(8)); // should return 40320