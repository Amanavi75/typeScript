let x: number = 10 ;
console.log(x);
function greet ( firstName:String){
    console.log("hello " +firstName)
}
greet("aman");

function sum (a:number , b:number){
    return a+b
}

console.log(sum(7,8))

function isLegal(a:number){
    if (a>18){
        return "legal"
    }else {
        return "illegal"
    }
}

console.log(isLegal(199))