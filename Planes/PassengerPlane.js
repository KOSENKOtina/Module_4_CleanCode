const Plane = require('./Plane');

class PassengerPlane extends Plane {
  constructor(passengerPlaneParamsObj) {
    super(passengerPlaneParamsObj);
    this._passengersCapacity = passengerPlaneParamsObj.passengersCapacity;
  }

  get passengersCapacity() {
    return this._passengersCapacity;
  }
}

module.exports = PassengerPlane;
