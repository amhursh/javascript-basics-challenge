function total(arr) {
  return arr.reduce(function(a, b) { return a + b; }, 0);
}

function mean(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}


module.exports = {
  total: total,
  mean: mean
};

// 3. Averages

// Write a function for each of the following. Each function will take an Array as the one argument..

//     total - returns the total of all the values in the array
//     mean - returns the mean (average) of the array
//     median - returns the median of the array
//     mode- returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency

// Don't forget to write tests for each function!