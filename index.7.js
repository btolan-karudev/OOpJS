
function Circle(radius) {
    // instance members
    this.radius = radius;
}

// prototype members
Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function () {
    return 'Circle with radius '+ this.radius;
}