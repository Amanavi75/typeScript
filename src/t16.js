// generics
// it makes component  reusable  having well defined api
// returning the same type of data as passed in parameter  we can use any keyword but it is not considered as stable
var score2 = [];
var names1 = [];
function indentityTwo(val) {
    return val;
}
function indentityThree(val) {
    return val;
}
function indentityFour(val) {
    return val;
}
// diferrence is that we can accept it any type of data the return type will be same as the type of data we are passing in the parameter
indentityFour(5);
