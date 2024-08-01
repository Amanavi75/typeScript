let score: number | string = 33
score = 44 
score = "55"

type User1 = {
    name:string,
    id:number,
}

type User3 = {
    role:string,
    age:number,
}

let aman : User1 | User3 = {name:"aman",id:139}

aman = {role:"swer",age:23}
let em2 :User1 | User3 = {role:"sde",age:24}


// using in parameter
function getDbID (ID:Number | string){
    console.log(`db id is ${ID}`)

}

getDbID(2)
getDbID("2")

