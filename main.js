class Car {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const car = new Car("Mercedes");

for(prop in car) {
    console.log(prop);
}

function Car1(name) {
    this.name = name;

    this.getName = function(){
        return this.name;
    }
}

const car1 = new Car1("BMW");

for(prop in car1) {
    console.log(prop);
}