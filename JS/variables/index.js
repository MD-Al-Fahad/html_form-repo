function solve()
{
    var age = 25;
    console.log(age)
}
// console.log(age) it will be error as we use var, for var global scope is not possible
solve();


{
    let a = 10;
    // let a = 20;  it cannot be done
    a = 20;
    console.log(a);
}

// console.log(a); it will be error, as a can be used only into the blockscope


// JavaScript objects are written with curly braces {}.

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);

// JavaScript arrays are written with square brackets.

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// Booleans can only have two values: true or false.
let x = 5;
let y = 5;
let z = 6;
   console.log(x == y);       // Returns true
   console.log(y==z);// Returns false

// let text1 = "20";
// let text2 = "5";
// let result = text1 < text2;
// console.log(result)

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;

console.log(text3)