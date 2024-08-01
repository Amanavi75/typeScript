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

let employee : User1 | User3 = {name:"aman",id:139}

let em2 :User1 | User3 = {role:"sde",age:24}


