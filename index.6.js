let person = {name: 'Beniamin'};

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: true
});

delete person.name;

// person.name = "Jonnu";
console.log(person);