const { PassengerPlane, MilitaryPlane } = require('../Planes');

class Airport {
  constructor(planes) {
    this._planes = planes;
  }

  get planes() {
    return this._planes;
  }

  sortPlanesByProperty(property) {
    this.planes.sort((a, b) => (a[property] > b[property] ? 1 : -1));
    return this;
  }

  getPlanesByCategory(category) {
    return this.planes.filter((plane) => plane instanceof category);
  }

  getPlanesByMilitaryType(type) {
    let militaryPlanes = this.getPlanesByCategory(MilitaryPlane);
    return militaryPlanes.filter((plane) => plane.militaryType == type);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    this.sortPlanesByProperty('maxLoadCapacity');
    const passengerPlanes = this.getPlanesByCategory(PassengerPlane);
    return passengerPlanes.reduce((curr, next) => (curr.passengersCapacity > next.passengersCapacity ? curr : next));
  }
}

module.exports = Airport;
