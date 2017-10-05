var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray(chocolateBars, "element")
destructivelyAddElementToBeginningOfArray(chocolateBars, "two")

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  console.log(array);
}
console.log(array);
function destructivelyAddElementToBeginningOfArray(array, element){
  array[0]=element;
  console.log(array);
}
