
function Circle(radius) {
    
    this.radius = radius;

    // private local variable to hide it from the public
    let defaultLocation = {x:0, y:0};

    //private method
    let computeOptimumLocation = function (factor) {
        console.log('private method called with draw and param: '+factor);
    };

    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('draw');
    };

}
const circle = new Circle(10);
circle.draw();

