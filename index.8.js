
function Circle(radius) {
    // instance members
    this.radius = radius;

    this.move = function () {
        this.draw();
        console.log('move');
    }


}

// prototype members
Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(5);

Circle.prototype.toString = function () {
    return 'Circle with radius '+ this.radius;
}

// returns instance members
console.log(Object.keys(c1))

// returns all members ("ownProperty"instance + prototype)
for (let key in c2) console.log(key);