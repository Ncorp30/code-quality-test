// Poor variable naming
var a = 10;
var b = 20;

var unusedVariable = "not used";


// Duplicate calculation logic
function calculateAndLogSum(first, second) {

    var result = first + second;

    console.log("Result:", result);

    return result;
}


// Same logic duplicated with different names
function calculateSum(first, second) {

    return calculateAndLogSum(first, second);
}


// Duplicate user printing logic
function printUserDetails(name, age) {

    console.log("Name:", name);
    console.log("Age:", age);

}

function createUserOne() {

    var name = "John";
    var age = 25;

    printUserDetails(name, age);

}


// Same duplicated block
function createUserTwo() {

    var username = "Mike";
    var userAge = 30;

    printUserDetails(username, userAge);

}


// Long function with multiple responsibilities
function calculateOperations(number1, number2) {

    var addition = number1 + number2;

    var subtraction = number1 - number2;

    var multiplication = number1 * number2;

    var division = number1 / number2;

    return {
        addition: addition,
        subtraction: subtraction,
        multiplication: multiplication,
        division: division
    };

}

function logOperations(results) {

    console.log(results.addition);

    console.log(results.subtraction);

    console.log(results.multiplication);

    console.log(results.division);

}

function performNotifications() {

    console.log("Saving data");

    console.log("Sending notification");

    console.log("Updating UI");

}

function processEverything() {

    var results = calculateOperations(100, 50);

    logOperations(results);

    performNotifications();

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


calculateAndLogSum(a,b);

calculateSum(5,10);

createUserOne();

createUserTwo();

processEverything();
