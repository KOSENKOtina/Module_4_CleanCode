const assert = require('chai').assert;
const Airport = require('../Airport/Airport');
const { PassengerPlane, ExperimentalPlane } = require('../Planes');
const { MilitaryTypes } = require('../models');
const { checkMaximumCapacitySorting, hasUnclassifiedPlanes } = require('./helpers/helperFuncs');
const { planes } = require('./testData/planes');

describe('Airport facility', () => {
  const airport = new Airport(planes);

  it('should have military Planes of transport type', () => {
    const transportMilitaryPlanes = airport.getMilitaryPlanesByType(MilitaryTypes.BOMBER);
    assert.isNotEmpty(transportMilitaryPlanes);
  });

  it('should find passenger plane with max capacity', () => {
    const expectedPlaneWithMaxPassengerCapacity = new PassengerPlane({
      model: 'Boeing-747',
      maxSpeed: 980,
      maxFlightDistance: 16100,
      maxLoadCapacity: 70500,
      passengersCapacity: 242
    });
    let actualPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
    assert.deepEqual(actualPlaneWithMaxPassengersCapacity, expectedPlaneWithMaxPassengerCapacity);
  });

  it('should sort planes by Maximum Capacity from less till more', () => {
    airport.sortPlanesByProperty('maxLoadCapacity');
    const planesSortedByMaxLoadCapacity = airport.planes;
    assert.isTrue(checkMaximumCapacitySorting(planesSortedByMaxLoadCapacity));
  });

  it(`should have at least one ${MilitaryTypes.BOMBER} military plane`, () => {
    let bomberMilitaryPlanes = airport.getMilitaryPlanesByType(MilitaryTypes.BOMBER);
    assert.isNotEmpty(bomberMilitaryPlanes);
  });

  it('should check that experimental planes has classification level higher than unclassified', () => {
    let experimentalPlanes = airport.getPlanesByCategory(ExperimentalPlane);
    assert.isFalse(hasUnclassifiedPlanes(experimentalPlanes));
  });
});
