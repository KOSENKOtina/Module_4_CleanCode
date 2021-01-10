const Plane = require('./Plane');

class PassengerPlane extends Plane {
  constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
    this._passengersCapacity = passengersCapacity;
  }

  get passengersCapacity() {
    return this._passengersCapacity;
  }
  isEqualTo(otherPlane) {
    return super.isEqualTo(otherPlane) && this.passengersCapacity == otherPlane.passengersCapacity;
  }
}

module.exports = PassengerPlane;
