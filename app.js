// Poor variable naming
var a = 10;
var b = 20;

var unusedVariable = "not used";


// Duplicate calculation logic
function calculateSum(firstNumber, secondNumber) {

    var result = firstNumber + secondNumber;

    console.log("Result:", result);

    return result;
}


// Same logic duplicated with different names
function x(y, z) {

    return calculateSum(y, z);
}


// Duplicate user printing logic
function createUser(user) {

    var name = user.name;
    var age = user.age;

    console.log("Name:", name);
    console.log("Age:", age);

}


// Same duplicated block
function createUserOne() {

    createUser({
        name: "John",
        age: 25
    });

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


x(a,b);

calculateSum(5,10);

createUserOne();

createUserTwo();

processEverything();
