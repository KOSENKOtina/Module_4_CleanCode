const { PassengerPlane, MilitaryPlane, ExperimentalPlane } = require('../Planes');

class Airport {
  constructor(planes) {
    this._planes = planes;
  }

  get planes() {
    return this._planes;
  }

  static print(planes) {
    return JSON.stringify(planes);
  }

  sortByMaxDistance() {
    this.planes.sort((a, b) => (a.maxFlightDistance > b.maxFlightDistance ? 1 : -1));
    return this;
  }

  sortByMaxSpeed() {
    this.planes.sort((a, b) => (a.maxSpeed > b.maxSpeed ? 1 : -1));
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort((a, b) => (a.maxLoadCapacity > b.maxLoadCapacity ? 1 : -1));
    return this;
  }

  getPlanesByPurpose(purpose) {
    const wantedPlanesArray = [];
    try {
      switch (purpose) {
        case 'Passenger':
          this.planes.forEach((plane) => {
            if (plane instanceof PassengerPlane) {
              wantedPlanesArray.push(plane);
            }
          });
          break;
        case 'Military':
          this.planes.forEach((plane) => {
            if (plane instanceof MilitaryPlane) {
              wantedPlanesArray.push(plane);
            }
          });
          break;
        case 'Experimental':
          this.planes.forEach((plane) => {
            if (plane instanceof ExperimentalPlane) {
              wantedPlanesArray.push(plane);
            }
          });
          break;
        default:
          throw new Error(
            'Sorry, no such plane type exists. ' + 'Please try one of the following: Passenger, Military, Experimental'
          );
          break;
      }
    } catch (e) {
      console.log(e);
    }
    return wantedPlanesArray;
  }

  getMilitaryPlanesByType(type) {
    let wantedTypeMilitaryPlanes = [];
    let militaryPlanes = this.getPlanesByPurpose('Military');
    for (let i = 0; i < militaryPlanes.length; i++) {
      if (militaryPlanes[i].militaryType == type) {
        wantedTypeMilitaryPlanes.push(militaryPlanes[i]);
      }
    }
    return wantedTypeMilitaryPlanes;
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    this.sortByMaxLoadCapacity();
    const passengerPlanes = this.getPlanesByPurpose('Passenger');
    let planeWithMaxCapacity = passengerPlanes[0];
    for (let i = 1; i < passengerPlanes.length; i++) {
      if (passengerPlanes[i].passengersCapacity > planeWithMaxCapacity.passengersCapacity) {
        planeWithMaxCapacity = passengerPlanes[i];
      }
    }
    return planeWithMaxCapacity;
  }
}

module.exports = Airport;
