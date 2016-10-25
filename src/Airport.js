'use strict';

function Airport(){
  this.planes = []
  this.capacity = 20
}

Airport.prototype.landPlane = function(plane) {
  var weather = this.checkWeather();
  if ((weather === "stormy") || (this.planes.length >= this.capacity)) {
    return "cannot land";
  } else {
    this.planes.push(plane);
  }
}

Airport.prototype.takeOff = function(plane) {
  var weather = this.checkWeather();
  if (weather === "stormy") {
    return "cannot take off";
  } else {
    this.planes.splice(plane);
  }
}

Airport.prototype.checkWeather = function() {
  setInterval(this.generateWeather(), 60000)
}

Airport.prototype.generateWeather = function() {
  if (Math.random() < 0.5) {
    return "stormy";
  } else {
    return "sunny";
  }
}
