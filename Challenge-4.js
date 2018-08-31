/* 
ChallengesLearn ⌄ProfileOrganizationsPremium Membership

Tags: math fundamentals | Difficulty: Easy

Challenge

Using the JavaScript language, have the function SimpleAdding(num) add up all the 
numbers from 1 to num. For example: if the input is 4 then your program should return 
10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num 
will be any number from 1 to 1000.  */

function SimpleAdding(num) { 

    let arr = [];

    for(let i = num; i > 0; i--) {
        arr.push(i);
    }

    var sum = arr.reduce(function(item, value) {
        return item + value;
    });

    return sum; 
           
  }
     
  // keep this function call here 
 /*  SimpleAdding(readline()); */

 SimpleAdding(12); // 78
 //SimpleAdding(140); // 9870



