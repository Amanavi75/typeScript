// enums; basically it allows us to defime a set of named constants.


enum direction {
    up = 1,
    down,
    left,
    right,

}

function doSomething (keyPressed:direction){
    console.log(`direction is ${direction}`)
}
doSomething(direction.down)
