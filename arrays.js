var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars = addElementToBeginningOfArray(chocolateBars, "element")
console.log(chocolateBars);
chocolateBars =destructivelyAddElementToBeginningOfArray(chocolateBars, "two")
console.log(chocolateBars);

chocolateBars=addElementToEndOfArray(chocolateBars, "two");
chocolateBars=destructivelyAddElementToEndOfArray(chocolateBars, "two");
var holder=accessElementInArray(chocolateBars, 2);
chocolateBars=destructivelyRemoveElementFromEndOfArray(chocolateBars);
//destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

function addElementToBeginningOfArray(array, element){
  array = [element,...array];
 return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  return array = [...array,element];
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
array.slice();
return array;
}

function removeElementFromEndOfArray(array){
array.slice(array.length-2,array.length-1)
}
