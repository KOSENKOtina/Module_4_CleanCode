const assert = require('chai').assert;
const Airport = require('../Airport/Airport');
const { MilitaryPlane, PassengerPlane, ExperimentalPlane } = require('../Planes');
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
    let hasAnyTransportPlanes = false;
    for (let militaryPlane of transportMilitaryPlanes) {
      if (militaryPlane.militaryType === MilitaryTypes.TRANSPORT) {
        hasAnyTransportPlanes = true;
        break;
      }
    }
    assert.isTrue(hasAnyTransportPlanes);
  });

  it('should find passenger plane with max capacity', () => {
    const expectedPlaneWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);
    let actualPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
    assert.isTrue(actualPlaneWithMaxPassengersCapacity.isEqualTo(expectedPlaneWithMaxPassengerCapacity));
  });

  it('should sort planes by Maximum Capacity from less till more', () => {
    airport.sortByMaxLoadCapacity();
    const planesSortedByMaxLoadCapacity = airport.planes;
    let isNextHigher = true;
    for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
      let currentPlane = planesSortedByMaxLoadCapacity[i];
      let nextPlane = planesSortedByMaxLoadCapacity[i + 1];
      if (currentPlane.maxLoadCapacity > nextPlane.maxLoadCapacity) {
        isNextHigher = false;
        break;
      }
    }
    assert.isTrue(isNextHigher);
  });

  it(`should have at least one ${MilitaryTypes.BOMBER} military plane`, () => {
    let bomberMilitaryPlanes = airport.getMilitaryPlanesByType(MilitaryTypes.BOMBER);
    let flag = false;
    for (let militaryPlane of bomberMilitaryPlanes) {
      if (militaryPlane.militaryType === MilitaryTypes.BOMBER) {
        flag = true;
      }
      assert.isTrue(flag);
    }
  });

  it('should check that experimental planes has classification level higher than unclassified', () => {
    let experimentalPlanes = airport.getPlanesByPurpose('Experimental');
    let hasUnclassifiedPlanes = false;
    for (let plane of experimentalPlanes) {
      if (plane.classificationLevel === ClassificationLevel.UNCLASSIFIED) {
        hasUnclassifiedPlanes = true;
      }
      assert.isFalse(hasUnclassifiedPlanes);
    }
  });
});
