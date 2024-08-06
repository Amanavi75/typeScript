interface User8 {
    email:string,
    id:number,
    startTrial:()=>string 
    //startTrail():string ---2nd method 

    getCoupon(couponName:string):number
}

// we can rewrite the interface with extra property and method 

interface User8 {
    githubToken:string
}

//we inherit the properties of earlier made interface using extends keyword 


interface Admin extends User8{
    role:string 
}

const hitesh:Admin = {
    email: "aman75@gmail.com", id: 6,
    role:"sde",
    githubToken:"adi",
    startTrial :()=>{
        return "starting up the trail"
    },

    getCoupon:()=>{
        return 10
    }
}

hitesh.email="amanavi75@gmail.com"