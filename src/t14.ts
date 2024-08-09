abstract class takePic{
    constructor(
        public camera:string,
        public filter :string, 
    ){

    }

    abstract getSap():void

} 

// we can't directly create object from the abstact class 

//rather than when we extend it through another class we will able to do it 

class insta extends takePic{
    constructor(
        public camera:string,
        public filter :string,
        public burst:number,
    ) {
        super(camera,filter)
    }

    getSap(): void {
        console.log("sepia");
    }

}
