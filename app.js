function find(array, criteriaFn) {
  // Using map we make a deep copy and simplify the algoritm.
  let deepCopy = array.map((item) => {return item})

  // Keep looping until we either return early or there is no array left.
  while (deepCopy.length) {
    // Check to see if the call back returns a true value for the first row and return it if needed.
    if (criteriaFn(deepCopy[0])) {
      return deepCopy[0]
    }
    // This is where the magic happens. We're basically doing a left-pop on the array here. So instead of iterating
    // one row at a time in a for loop (Which you could do) you just drop the top row on the ground and re-enter the while loop.
    // This allows us to use index 0 as the top row each time we reenter the loop. Very cool.
    deepCopy.shift()
  }
  return null
}


module.exports = find;
