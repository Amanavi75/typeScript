// generics

const score2: Array<number> = [];

const names1: Array<string> = [];

function indentityTwo(val: boolean | number): boolean | number {
  return val;
}

function indentityThree(val: any): any {
  return val;
}

function indentityFour<Type>(val: Type): Type {
  return val;
}

// diferrence is that we can accept it any type of data the return type will be same as the type of data we are passing in the parameter

indentityFour(5);
