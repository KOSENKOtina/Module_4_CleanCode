const { MilitaryTypes, ClassificationLevel } = require('../../models');

function hasAnyTransportPlanes(arrayToCheck) {
  let hasAnyTransportPlanes = false;
  for (let militaryPlane of arrayToCheck) {
    if (militaryPlane.militaryType === MilitaryTypes.TRANSPORT) {
      hasAnyTransportPlanes = true;
      break;
    }
  }
  return hasAnyTransportPlanes;
}

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

function hasAnyBomberPlanes(arrayToCheck) {
  let flag = false;
  for (let militaryPlane of arrayToCheck) {
    if (militaryPlane.militaryType === MilitaryTypes.BOMBER) {
      flag = true;
    }
    return flag;
  }
}

function hasUnclassifiedPlanes(arrayToCheck) {
  let hasUnclassifiedPlanes = false;
  for (let plane of arrayToCheck) {
    if (plane.classificationLevel === ClassificationLevel.UNCLASSIFIED) {
      hasUnclassifiedPlanes = true;
    }
    return hasUnclassifiedPlanes;
  }
}

module.exports = {
  hasAnyTransportPlanes,
  checkMaximumCapacitySorting,
  hasAnyBomberPlanes,
  hasUnclassifiedPlanes,
};
