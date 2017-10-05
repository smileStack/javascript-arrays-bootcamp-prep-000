var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars = addElementToBeginningOfArray(chocolateBars, "element")
console.log(chocolateBars);
chocolateBars =destructivelyAddElementToBeginningOfArray(chocolateBars, "two")
console.log(chocolateBars);

chocolateBars=addElementToEndOfArray(chocolateBars, "two");
chocolateBars=destructivelyAddElementToEndOfArray(chocolateBars, "two");
accessElementInArray(chocolateBars, 2);
chocolateBars=destructivelyRemoveElementFromEndOfArray();
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
  return   array = [...array,element];
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromEndOfArray(){
  return array.pop();
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array;
}
