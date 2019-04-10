console.log('Bonjour');

// Factory Function
function createCircles(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
    
}

const circle = createCircles(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);

another.draw();