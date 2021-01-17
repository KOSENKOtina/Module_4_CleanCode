const { PassengerPlane, MilitaryPlane, ExperimentalPlane } = require('../../Planes');
const { ClassificationLevel, MilitaryTypes, ExperimentalTypes } = require('../../models');

module.exports = {
  planes: [
    new PassengerPlane({
      model: 'Boeing-737',
      maxSpeed: 900,
      maxFlightDistance: 12000,
      maxLoadCapacity: 60500,
      passengersCapacity: 164
    }),
    new PassengerPlane({
      model: 'Boeing-737-800',
      maxSpeed: 940,
      maxFlightDistance: 12300,
      maxLoadCapacity: 63870,
      passengersCapacity: 192
    }),
    new PassengerPlane({
      model: 'Boeing-747',
      maxSpeed: 980,
      maxFlightDistance: 16100,
      maxLoadCapacity: 70500,
      passengersCapacity: 242
    }),
    new PassengerPlane({
      model: 'Airbus A320',
      maxSpeed: 930,
      maxFlightDistance: 11800,
      maxLoadCapacity: 65500,
      passengersCapacity: 188
    }),
    new PassengerPlane({
      model: 'Airbus A330',
      maxSpeed: 990,
      maxFlightDistance: 14800,
      maxLoadCapacity: 80500,
      passengersCapacity: 222
    }),
    new PassengerPlane({
      model: 'Embraer 190',
      maxSpeed: 870,
      maxFlightDistance: 8100,
      maxLoadCapacity: 30800,
      passengersCapacity: 64
    }),
    new PassengerPlane({
      model: 'Sukhoi Superjet 100',
      maxSpeed: 870,
      maxFlightDistance: 11500,
      maxLoadCapacity: 50500,
      passengersCapacity: 140
    }),
    new PassengerPlane({
      model: 'Bombardier CS300',
      maxSpeed: 920,
      maxFlightDistance: 11000,
      maxLoadCapacity: 60700,
      passengersCapacity: 196
    }),
    new MilitaryPlane({
      model: 'B-1B Lancer',
      maxSpeed: 1050,
      maxFlightDistance: 21000,
      maxLoadCapacity: 80000,
      militaryType: MilitaryTypes.BOMBER
    }),
    new MilitaryPlane({
      model: 'B-2 Spirit',
      maxSpeed: 1030,
      maxFlightDistance: 22000,
      maxLoadCapacity: 70000,
      militaryType: MilitaryTypes.BOMBER
    }),
    new MilitaryPlane({
      model: 'B-52 Stratofortress',
      maxSpeed: 1000,
      maxFlightDistance: 20000,
      maxLoadCapacity: 80000,
      militaryType: MilitaryTypes.BOMBER
    }),
    new MilitaryPlane({
      model: 'F-15',
      maxSpeed: 1500,
      maxFlightDistance: 12000,
      maxLoadCapacity: 10000,
      militaryType: MilitaryTypes.FIGHTER
    }),
    new MilitaryPlane({
      model: 'F-22',
      maxSpeed: 1550,
      maxFlightDistance: 13000,
      maxLoadCapacity: 11000,
      militaryType: MilitaryTypes.FIGHTER
    }),
    new MilitaryPlane({
      model: 'C-130 Hercules',
      maxSpeed: 650,
      maxFlightDistance: 5000,
      maxLoadCapacity: 110000,
      militaryType: MilitaryTypes.TRANSPORT
    }),
    new ExperimentalPlane({
      model: 'Bell X-14',
      maxSpeed: 277,
      maxFlightDistance: 482,
      maxLoadCapacity: 500,
      type: ExperimentalTypes.HIGH_ALTITUDE,
      classificationLevel: ClassificationLevel.SECRET
    }),
    new ExperimentalPlane({
      model: 'Ryan X-13 Vertijet',
      maxSpeed: 560,
      maxFlightDistance: 307,
      maxLoadCapacity: 500,
      type: ExperimentalTypes.VTOL,
      classificationLevel: ClassificationLevel.TOP_SECRET
    })
  ]
};
