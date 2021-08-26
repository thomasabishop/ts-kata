/**
 * I'm looking at different ways to type functions.
 * This is mainly for scenarios where you want to pass a function as a parameter to another function, i.e higher order functions
 */

/* Method 1: using `typeof` in the list of parameters. Not very explicit
 */

function addTwo(int: number): number {
  return int + 2;
}

function passFunc(integer: number, addFunction: typeof addTwo): number {
  return addFunction(integer);
}
console.group('Method one: using typeof');
console.log(passFunc(8, addTwo));
console.groupEnd();

/* Method 2: defining function as a self-standing type then typing as this when passing as an argument to another function
 */

// The type definition:
interface addSomething {
  (int: number): number;
}

// The higher-order function:

function passFuncTwo(integer: number, addFunction: addSomething): number {
  return addFunction(integer);
}

console.group('Method two: using type definition');
console.log(passFuncTwo(3, addTwo));
console.groupEnd();

/* Method 3: defining a function type as one property of a larger overall type
 */

// Overall type:
interface addStuff {
  int: number;
  addSomething: (int: number) => number;
}

// Now instantiate

const exampleOfAddStuff: addStuff = {
  int: 5,
  addSomething: addTwo,
};

// Now use this object
console.group('Method three: defining as prop within overall type');
console.log(exampleOfAddStuff.addSomething(exampleOfAddStuff.int));
console.groupEnd();
// Method 4: using the `declare` keyword

// This is nearly identical to the first method
declare function addThree(int: number): number;

function passFuncThree(int: number, addingFunction: typeof addThree) {
  return addingFunction(int);
}

console.group('Method four: using the `declare` keyword');
console.log(passFuncThree(2, addTwo));
console.groupEnd();
