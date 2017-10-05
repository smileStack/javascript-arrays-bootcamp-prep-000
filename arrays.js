var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars = addElementToBeginningOfArray(chocolateBars, "element")
console.log(chocolateBars);
chocolateBars =destructivelyAddElementToBeginningOfArray(chocolateBars, "two")
console.log(chocolateBars);

chocolateBars=addElementToEndOfArray(chocolateBars, "two");

function addElementToBeginningOfArray(array, element){
  array = [element,...array];
 return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  return array.push(element);
}
function addElementToEndOfArray(array, element){
  return array.push(element);
}
