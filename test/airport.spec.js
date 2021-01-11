const assert = require('chai').assert;
const Airport = require('../Airport/Airport');
const { MilitaryPlane, PassengerPlane, ExperimentalPlane } = require('../Planes');
const {
  hasAnyTransportPlanes,
  checkMaximumCapacitySorting,
  hasAnyBomberPlanes,
  hasUnclassifiedPlanes,
} = require('./helpers/helperFuncs');
const { MilitaryTypes, ExperimentalTypes, ClassificationLevel } = require('../models');

describe('Airport facility', () => {
  let planes = [
    new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
    new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
    new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
    new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
    new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
    new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
    new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
    new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
    new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryTypes.BOMBER),
    new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryTypes.BOMBER),
    new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryTypes.BOMBER),
    new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryTypes.FIGHTER),
    new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryTypes.FIGHTER),
    new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryTypes.TRANSPORT),
    new ExperimentalPlane('Bell X-14', 277, 482, 500, ExperimentalTypes.HIGH_ALTITUDE, ClassificationLevel.SECRET),
    new ExperimentalPlane('Ryan X-13 Vertijet', 560, 307, 500, ExperimentalTypes.VTOL, ClassificationLevel.TOP_SECRET),
  ];
  const airport = new Airport(planes);

  it('should have military Planes of transport type', () => {
    const transportMilitaryPlanes = airport.getMilitaryPlanesByType('Transport');
    assert.isTrue(hasAnyTransportPlanes(transportMilitaryPlanes));
  });

  it('should find passenger plane with max capacity', () => {
    const expectedPlaneWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);
    let actualPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
    assert.deepEqual(actualPlaneWithMaxPassengersCapacity, expectedPlaneWithMaxPassengerCapacity);
  });

  it('should sort planes by Maximum Capacity from less till more', () => {
    airport.sortPlanesByMaxLoadCapacity();
    const planesSortedByMaxLoadCapacity = airport.planes;
    assert.isTrue(checkMaximumCapacitySorting(planesSortedByMaxLoadCapacity));
  });

  it(`should have at least one ${MilitaryTypes.BOMBER} military plane`, () => {
    let bomberMilitaryPlanes = airport.getMilitaryPlanesByType(MilitaryTypes.BOMBER);
    assert.isTrue(hasAnyBomberPlanes(bomberMilitaryPlanes));
  });

  it('should check that experimental planes has classification level higher than unclassified', () => {
    let experimentalPlanes = airport.getPlanesByCategory('Experimental');
    assert.isFalse(hasUnclassifiedPlanes(experimentalPlanes));
  });
});
