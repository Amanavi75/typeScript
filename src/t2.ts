interface User {
    firstName:String,
    lastName:String,
    age:number
};

function isL(user:User){
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}
function greeting(){
    console.log("hi there");
}

greeting();




//* to avoid the writting the same code again and again we create an interface and implement it where it is needed

