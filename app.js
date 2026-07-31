// Poor variable naming
var a = 10;
var b = 20;

var unusedVariable = "not used";


// Duplicate calculation logic
function calculateSum(first, second) {

    var result = first + second;

    console.log("Result:", result);

    return result;
}


// Same logic duplicated with different names
function calculateSumAndPrint(first, second) {

    var total = calculateSum(first, second);

    return total;
}


// Duplicate user printing logic
function printUserInfo(name, age) {

    console.log("Name:", name);
    console.log("Age:", age);

}

function createUserOne() {

    var name = "John";
    var age = 25;

    printUserInfo(name, age);

}


// Same duplicated block
function createUserTwo() {

    var username = "Mike";
    var userAge = 30;

    printUserInfo(username, userAge);

}


// Long function with multiple responsibilities
function processEverything() {

    var number1 = 100;
    var number2 = 50;


    var addition = number1 + number2;

    var subtraction = number1 - number2;

    var multiplication = number1 * number2;

    var division = number1 / number2;


    console.log(addition);

    console.log(subtraction);

    console.log(multiplication);

    console.log(division);


    console.log("Saving data");

    console.log("Sending notification");

    console.log("Updating UI");

}


// Bad formatting and unnecessary code
function checkValue(value){

if(value==true){

console.log("Value is true");

}

else{

console.log("Value is false");

}

}


calculateSum(a,b);

calculateSum(5,10);

createUserOne();

createUserTwo();

processEverything();
