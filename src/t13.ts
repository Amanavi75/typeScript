interface takePhoto{
    cameraMode:string,
    filter:string,
    burst:number
}

class Instagram implements takePhoto{
    constructor (
        public cameraMode:string,
        public filter :string,
        public burst:number

    ){

    }


}

interface story {
    createStory():void
}

class Youtube implements takePhoto,story{
    constructor (
        public cameraMode:string,
        public filter :string,
        public burst:number,
        public record:number,
        

    ){

    }

    createStory():void {
        console.log("story added ")
    }
}