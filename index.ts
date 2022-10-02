// sample code to solve typescirpt functional programming

type SingleNumberFunctionType = (inputNumber: number) => number

const addTen = (
  inputNumber: number
): number => {
  return inputNumber + 10
}

const doubleNumber = (inputNumber: number): number => {
  return inputNumber * 2
}

const divideNumber = (inputNumber: number): number => {
  return inputNumber / 2
}

// need to build functional programming solution

// 1. build combined function

const combine = (
  inputResult: number,
  nextFunction: SingleNumberFunctionType
): number => {
  return nextFunction(inputResult);
}

// good use of reduce : array.reduce((total, nextParameter) => {
//
// }, initialValue)

const pipe = (...fns: SingleNumberFunctionType[]) => {
  return (inputNumber: number) => {
    return fns.reduce(combine, inputNumber);
  }
}

const result = pipe(divideNumber, addTen, doubleNumber)(10);
console.log(result);

