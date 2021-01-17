const { ClassificationLevel } = require('../../models');

function checkMaximumCapacitySorting(arrayToCheck) {
  let isNextHigher = true;
  for (let i = 0; i < arrayToCheck.length - 1; i++) {
    let currentPlane = arrayToCheck[i];
    let nextPlane = arrayToCheck[i + 1];
    if (currentPlane.maxLoadCapacity > nextPlane.maxLoadCapacity) {
      isNextHigher = false;
      break;
    }
  }
  return isNextHigher;
}

function hasUnclassifiedPlanes(arrayToCheck) {
  return arrayToCheck.some((plane) => plane.classificationLevel === ClassificationLevel.UNCLASSIFIED);
}

module.exports = {
  checkMaximumCapacitySorting,
  hasUnclassifiedPlanes
};
