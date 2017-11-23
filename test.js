const find = require('./app.js')
const expect = require('chai').expect

const twoDimentionalArray = [['a', 'a', 'a', 'b', 'a'],
                             ['e', 'a', 'o', 'a', 't'],
                             ['a', 'a', 'a', 'a', 'a'],
                             ['a', 'a', 'x', 'a', 'a'],
                             ['a', 'y', 'o', 'a', 'a']]


describe('find', () => {
    it('return the row containing the x that fits the criteria', () => {
      expect(find(twoDimentionalArray, function(oneDimensionalArray) {
          return (oneDimensionalArray.indexOf('x') >= 0);
      })).to.have.all.members(['a', 'a', 'x', 'a', 'a'])
    })
    it('return the row containing the y that fits the criteria', () => {
      expect(find(twoDimentionalArray, function(oneDimensionalArray) {
          return (oneDimensionalArray.indexOf('y') >= 0);
      })).to.have.all.members(['a', 'y', 'o', 'a', 'a'])
    })
    it('return the row containing the t that fits the criteria', () => {
      expect(find(twoDimentionalArray, function(oneDimensionalArray) {
          return (oneDimensionalArray.indexOf('t') >= 0);
      })).to.have.all.members(['e', 'a', 'o', 'a', 't'])
    })
})
