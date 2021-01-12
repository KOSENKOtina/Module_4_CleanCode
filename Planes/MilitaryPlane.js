const Plane = require('./Plane');

class MilitaryPlane extends Plane {
  constructor(militaryPlaneParamsObj) {
    super(militaryPlaneParamsObj);
    this._militaryType = militaryPlaneParamsObj.militaryType;
  }

  get militaryType() {
    return this._militaryType;
  }
}

module.exports = MilitaryPlane;
