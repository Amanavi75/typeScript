interface User8 {
    email:string,
    id:number,
    startTrial:()=>string
}

const hitesh:User8 = {
    email: "aman75@gmail.com", id: 6,
    startTrial :()=>{
        return "starting up the trail"
    }
}

hitesh.email="amanavi75@gmail.com"