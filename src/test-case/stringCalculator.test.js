const {add} = require('../stringCalculator');
console.log(add(""));
console.log(add("10"));

describe('String Calculator', () => {

  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(add("5")).toBe(5);
  });
});
