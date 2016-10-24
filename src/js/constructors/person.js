function Person (options) {
  var options = options || {};
  if ( options.cool === true) {
    this.cool = true;
  } else { this.cool = false}
};
  Person.prototype.feed = function (x) {
    return x.hungry = false;
  }
  Person.prototype.pet = function (x) {
  return x.status = 'happy';
};



export { Person };
