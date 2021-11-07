function generateArray(existingArray: any[], newValue: any): any[] {
  return [...existingArray, newValue];
}

function generateArrayTwo(existingArray: any[], newValue: any): any {
  // const merge = [...existingArray, newValue];
  console.log(newValue.length);
}

// console.log(generateArrayTwo([1, 2, 3], "hello"));

function genNewArray<T>(existingArr: T[], newValue: T): T[] {
  return [...existingArr, newValue];
}

console.log(genNewArray([1, 2, 3], 4));
