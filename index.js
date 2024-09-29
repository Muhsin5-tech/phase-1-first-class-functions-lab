// index.js

// Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function to return the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Array of selecting functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function to create a fare multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Fare doubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Fare tripler function
  const fareTripler = createFareMultiplier(3);
  
  // Function to select different drivers based on the provided function
  function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }
  
  // Exporting functions
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  
