//class 
class User9{
    email:string
    name:string
    city: string =""

    constructor (email:string,name:string){
        this.email = email;
        this.name=name 
    }
}

class User10{
    
    constructor (public email:string, public name:string){
      
    }
}

const aman6=new User10("aman","adi")

// additional method to write class without this keyword 

// object 
const hitesh1 = new User9("h@mail.com","hitesh")
hitesh1.city='patna'