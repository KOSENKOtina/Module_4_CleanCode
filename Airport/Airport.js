const { PassengerPlane, MilitaryPlane, ExperimentalPlane } = require('../Planes');

class Airport {
  constructor(planes) {
    this._planes = planes;
  }

  get planes() {
    return this._planes;
  }

  static stringifyPlanes(planes) {
    return JSON.stringify(planes);
  }

  sortPlanesByMaxDistance() {
    this.planes.sort((a, b) => (a.maxFlightDistance > b.maxFlightDistance ? 1 : -1));
    return this;
  }

  sortPlanesByMaxSpeed() {
    this.planes.sort((a, b) => (a.maxSpeed > b.maxSpeed ? 1 : -1));
    return this;
  }

  sortPlanesByMaxLoadCapacity() {
    this.planes.sort((a, b) => (a.maxLoadCapacity > b.maxLoadCapacity ? 1 : -1));
    return this;
  }

  getPlanesByCategory(category) {
    let wantedPlanesArray = [];
    switch (category) {
      case 'Passenger':
        wantedPlanesArray = this.planes.filter((plane) => plane instanceof PassengerPlane);
        break;
      case 'Military':
        wantedPlanesArray = this.planes.filter((plane) => plane instanceof MilitaryPlane);
        break;
      case 'Experimental':
        wantedPlanesArray = this.planes.filter((plane) => plane instanceof ExperimentalPlane);
        break;
      default:
        throw new Error(
          `Sorry, no planes of such category (${category}) exists. ` +
            'Please try one of the following: Passenger, Military, Experimental'
        );
        break;
    }
    return wantedPlanesArray;
  }

  getMilitaryPlanesByType(type) {
    let militaryPlanes = this.getPlanesByCategory('Military');
    return militaryPlanes.filter((plane) => plane.militaryType == type);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    this.sortPlanesByMaxLoadCapacity();
    const passengerPlanes = this.getPlanesByCategory('Passenger');
    return passengerPlanes.reduce((curr, next) => (curr.passengersCapacity > next.passengersCapacity ? curr : next));
  }
}

module.exports = Airport;
