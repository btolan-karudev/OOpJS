// Constructor Function
function Circle(radius) {
    // console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(1);

// console.log('this', this);

// enumerating all the members in a obj
for (let key in circle) {
    if (typeof circle[key] !== 'function') {
        console.log(key, circle[key]);
    }
}

// get all the keys in an obj (array) 
const keys = Object.keys(circle);
console.log(keys);

// check the existence of a prop or method
if ('radius' in circle) {
console.log('Circle has a radius');    
} 