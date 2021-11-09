type Petrol = {
  maxSpeed: number;
  tankVolume: number;
};

type Electric = {
  maxSpeed: number;
  maxCharge: number;
};

type Car = Petrol | Electric;

const tesla: Car = {
  maxSpeed: 120,
  maxCharge: 22,
};

function generateCar(car: Petrol | Electric): void {
  console.log(`The car has a maxpeed of ${car.maxSpeed}`);
}

function printId(id: number | string): void {
  console.log(`Your id is ${id}`);
}

function printStringOrNumber(): string | number {
  return 'a string';
}

type Hydrogen = {
  maxLength: number | string;
};

interface Helium {
  maxLength: number | boolean;
}
