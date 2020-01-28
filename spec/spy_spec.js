let Car = require('../src/spy');

describe('Car getBrand and getSpeed Test', function() {
  it('calls the getBrand() and getSpeed function', function() {
    // Create a new intance of Car
    let car = new Car();

    //spyOn Brand
    spyOn(car, 'getBrand');

    // Method Calling Brand
    car.getBrand();
    car.getBrand();
    car.getBrand(360, 'BMW 3 series GT');

    expect(car.getBrand).toHaveBeenCalled();
    expect(car.getBrand).toHaveBeenCalledTimes(3);
    expect(car.getBrand).toHaveBeenCalledWith(360, 'BMW 3 series GT');
  });

  it('calls the getSpeed() and getSpeed function', function() {
    // Create a new intance of Car
    let BMW = new Car();
    // spyOn Speed
    spyOn(BMW, 'getSpeed');

    // Method calling Speed
    BMW.getSpeed();
    BMW.getSpeed();
    BMW.getSpeed(360, 'BMW 3 series GT');

    expect(BMW.getSpeed).toHaveBeenCalled();
    expect(BMW.getSpeed).toHaveBeenCalledTimes(3);
    expect(BMW.getSpeed).toHaveBeenCalledWith(360, 'BMW 3 series GT');
  });
});
