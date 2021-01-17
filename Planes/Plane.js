class Plane {
  constructor(planeParamsObj) {
    this._model = planeParamsObj.model;
    this._maxSpeed = planeParamsObj.maxSpeed;
    this._maxFlightDistance = planeParamsObj.maxFlightDistance;
    this._maxLoadCapacity = planeParamsObj.maxLoadCapacity;
  }

  get model() {
    return this._model;
  }

  get maxSpeed() {
    return this._maxSpeed;
  }

  get maxFlightDistance() {
    return this._maxFlightDistance;
  }

  get maxLoadCapacity() {
    return this._maxLoadCapacity;
  }
}

module.exports = Plane;
