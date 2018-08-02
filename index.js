function bumpCounter() {
  var counter = 0;
  
  function addBump() {
    counter ++
  }
  
  function getBumps() {
    return counter;
  }
  
  return {
    addBump,
    getBumps
  }
}

var sharkCreator = createAnimal('Shark');
// closures Dangerous animals should have a `sharkWithFrickinLaserbeam` variable:
var sharkWithFrickinLaserbeam = sharkCreator.deadlyDevice('Laserbeam');

var sharkWithFrickinCannon = sharkCreator.deadlyDevice('Cannon');

function createAnimal(animalType){
  const animal = {
    animalType: animalType,
    deadlyDevice:  null
  }
  
  return function(){
    return deadlyDevice
  }
}