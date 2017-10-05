var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray(chocolateBars, "element")
console.log(chocolateBars);
destructivelyAddElementToBeginningOfArray(chocolateBars, "two")
console.log(chocolateBars);

function addElementToBeginningOfArray(array, element){
  array = [element,...array];
  console.log(array);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  console.log(array);
}
