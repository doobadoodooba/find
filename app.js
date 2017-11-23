function find(array, criteriaFn) {

  let current = array
  // Are we sure we need to be pushing into a new array if we will never return the original?
  // let only scopes to the current block (the find function, so we would not be mutating)
  // the original array.
  let next = []

  // If we update this to check how many rows are left in our array we can simplify the algorithm quite a bit.
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
    // Again, there is no real need to build a separate array with all of the following rows.
    // As you'll see in the next commit.
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    // I really like this because its what's doing the bulk of the work for you.
    // Think hard about what this is doing in the context of what you have going on in lines 16 thorugh 20.
    current = next.shift()
  }
  return null
}


module.exports = find;
