// Code your solution in this file!'
function distanceFromHqInBlocks(location) {
  const headquarter = 42;
  return Math.abs(location - headquarter);
}

function distanceFromHqInFeet(location) {
  const distance = distanceFromHqInBlocks(location);
  return distance * 264;
}

function distanceTravelledInFeet(start, destination) {
  let travelledDistatnce = Math.abs(start - destination);
  return travelledDistatnce * 264;
}

function calculatesFarePrice(start, destination) {
  let travellDistance = distanceTravelledInFeet(start, destination);
  if (travellDistance < 400) {
    return 0;
  } else if (travellDistance <= 2000) {
    return (travellDistance - 400) * 0.02;
  } else if (travellDistance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

// function distanceFromHqInBlocks(location) {
//     const headquarter = 42;
//     return Math.abs(location - headquarter);
// }

// function distanceFromHqInFeet(location) {
//     const distance = distanceFromHqInBlocks(location)
//     return distance * 264;
// }
// function distanceTravelledInFeet(start, destination) {
//     let travelDistance = Math.abs(start - destination);
//     return travelDistance * 264;
// }

// function calculatesFarePrice(start, destination) {
//     const traveled = distanceTravelledInFeet (start, destination);
//     if (traveled <= 400) {
//         return 0;
//     } else if (traveled <= 2000) {
//         return (traveled - 400) * 0.02;
//     } else if (traveled < 2500) {
//         return 25;
//     } else {
//         return "cannot travel that far";
//     }
// }
