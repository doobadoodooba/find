function find(array, criteriaFn) {
  if(!array.length){
      return null;
  }
  return criteriaFn(array[0]) ? array[0] : find(array.slice(1), criteriaFn)
}

module.exports = find;
