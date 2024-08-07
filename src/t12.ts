// getter and setter 
class User {

    private courseCount = 1; 
    // we can't access this directly 
    readonly city:string = "jaipur"
    constructor ( 
        public email:string ,  
        public name :string 
        )
        {
        
        }

        private deleteToken(){
            console.log("token deleted")
        }

        get getAppleEmail(){
            return `apple${this.email}`
        }
        // getter

        get _courseCount():number{
            return this.courseCount

        }

        //setters 
        set _courseCount(courseNum){
            if(courseNum<=1){
                throw new Error("course count should be more than 1 ")
            }
            this.courseCount = courseNum

        }


}

