var chocolateBars ==["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray(array, element){
  array.unshift(element);
  console.log(array);
}

destructivelyAddElementToBeginningOfArray(array, element){
  array[0]=element;
  console.log(array);
}
