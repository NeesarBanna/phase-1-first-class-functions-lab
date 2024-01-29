const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    function returnFirstTwoDrivers(drivers) {
        return drivers.slice(0, 2);
}

    function returnLastTwoDrivers(drivers) {
        return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareMultiplier = createFareMultiplier(4);
function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }
  
  function fareDoubler(fare) {
    return fare * 2;
  }
  
  function fareTripler(fare) {
    return fare * 3;
  }

  function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
  }
 
        