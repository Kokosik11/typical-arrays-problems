
exports.min = function min (array) {
  if(array == [] && array.length > 0 || array != undefined) {
    let min = 0;
    for(let i = 0; i < array.length; i++) {
      if(array[i] < min) min = array[i];
    }
    return min;
  }
  return 0;
}

exports.max = function max (array) {
  if(array == [] && array.length > 0 || array != undefined) {
    let max = 0;
    for(let i = 0; i < array.length; i++) {
      if(array[i] > max) max = array[i];
    }
    return max;
  }
  return 0;
}

exports.avg = function avg (array) {
  if(array == undefined || array == NaN) return 0;
  if(array != [] && array.length == 0) return 0;

  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
