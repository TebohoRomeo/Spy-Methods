let Car = require('../src/spy');

describe('getBrand() function', function() {
  let car = new Car();

  it('calls the getBrand() function', function() {
    let car = new Car();
    spyOn(car, 'getBrand');
    car.getBrand();

    expect(car.getBrand).toHaveBeenCalled();
  });

  it('calls the getBrand() function', function() {
    spyOn(car, 'getBrand');
    car.getBrand();
    expect(car.getBrand).toHaveBeenCalledTimes(1);
  });

  it('calls the getBrand() function', function() {
    spyOn(car, 'getBrand');
    car.getBrand(360, 'BMW 3 series GT');
    expect(car.getBrand).toHaveBeenCalledWith(360, 'BMW 3 series GT');
  });
});
