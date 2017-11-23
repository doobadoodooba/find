function find(array, criteriaFn) {
  // Using map we make a deep copy and simplify the algoritm.
  let deepCopy = array.map((item) => {return item})

  while (deepCopy.length) {
    if (criteriaFn(deepCopy[0])) {
      return deepCopy[0]
    }
    // Now we can just drop the value returned by this on the floor as it manipulates the original deepCopy.
    deepCopy.shift()
  }
  return null
}


module.exports = find;
