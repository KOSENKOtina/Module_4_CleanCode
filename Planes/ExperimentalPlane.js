const Plane = require('./Plane');

class ExperimentalPlane extends Plane {
  constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
    this._type = type;
    this._classificationLevel = classificationLevel;
  }
  get type() {
    return this._type;
  }

  get classificationLevel() {
    return this._classificationLevel;
  }
  isEqualTo(otherPlane) {
    return (
      super.isEqualTo(otherPlane) &&
      this.type == otherPlane.type &&
      this.classificationLevel == otherPlane.classificationLevel
    );
  }
}

module.exports = ExperimentalPlane;
