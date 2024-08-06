interface User8 {
    email:string,
    id:number,
    startTrial:()=>string 
    //startTrail():string ---2nd method 

    getCoupon(couponName:string):number
}

const hitesh:User8 = {
    email: "aman75@gmail.com", id: 6,
    startTrial :()=>{
        return "starting up the trail"
    },

    getCoupon:()=>{
        return 10
    }
}

hitesh.email="amanavi75@gmail.com"