"use strict";
let x = 10;
console.log(x);
function greet(firstName) {
    console.log("hello " + firstName);
}
greet("aman");
function sum(a, b) {
    return a + b;
}
console.log(sum(7, 8));
function isLegal(a) {
    if (a > 18) {
        return "legal";
    }
    else {
        return "illegal";
    }
}
console.log(isLegal(199));
