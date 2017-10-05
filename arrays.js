var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars = addElementToBeginningOfArray(chocolateBars, "element")
console.log(chocolateBars);
chocolateBars =destructivelyAddElementToBeginningOfArray(chocolateBars, "two")
console.log(chocolateBars);

function addElementToBeginningOfArray(array, element){
  array = [element,...array];
 return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
