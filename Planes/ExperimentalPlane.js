const Plane = require('./Plane');

class ExperimentalPlane extends Plane {
  constructor(experimentalPlaneParamsObj) {
    super(experimentalPlaneParamsObj);
    this._type = experimentalPlaneParamsObj.type;
    this._classificationLevel = experimentalPlaneParamsObj.classificationLevel;
  }
  get type() {
    return this._type;
  }

  get classificationLevel() {
    return this._classificationLevel;
  }
}

module.exports = ExperimentalPlane;
