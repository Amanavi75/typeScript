abstract class takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}

  abstract getTree(): void  
  // we don't have to provide the defination for this function 

  getTme():number{
    return 10 ;
  }
}

const hite= new insta("aman","adi",5)
// we can't directly create object from the abstact class

class Insta extends takePhoto {
  constructor(
    public cameramode: string,
    public filter: string,
    public free :number 
    
  ){
    super(cameramode,filter)
  }
  getTree(): void {
    console.log("called the abstract class method ");
  }
}
