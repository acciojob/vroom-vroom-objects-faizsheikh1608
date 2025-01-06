// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor with make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};



// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
