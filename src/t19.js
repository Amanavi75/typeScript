// enums; basically it allows us to defime a set of named constants.
var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = 2] = "down";
    direction[direction["left"] = 3] = "left";
    direction[direction["right"] = 4] = "right";
})(direction || (direction = {}));
function doSomething(keyPressed) {
    console.log("direction is ".concat(direction));
}
doSomething(direction.down);
