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

// Constructor Function

const circle = createCircles(1);
circle.draw();