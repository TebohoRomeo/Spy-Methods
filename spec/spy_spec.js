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

    // spyOn Speed
    spyOn(car, 'getSpeed');

    // Method calling Speed
    car.getSpeed();
    car.getSpeed();
    car.getSpeed(360, 'BMW 3 series GT');

    expect(car.getSpeed).toHaveBeenCalled();
    expect(car.getSpeed).toHaveBeenCalledTimes(3);
    expect(car.getSpeed).toHaveBeenCalledWith(360, 'BMW 3 series GT');
  });
});
