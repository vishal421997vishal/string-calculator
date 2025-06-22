const {add} = require('../stringCalculator');
console.log(add(""));
console.log(add("10"));
console.log(add("1,2,3,4,5,6,7,8,9,10"));
console.log(add("1" +
  ",3," +
  "4"));

describe('String Calculator', () => {

  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(add("5")).toBe(5);
  });

  test('should return the sum of two numbers separated by a comma', () => {
    expect(add("1,2")).toBe(3);
  });

  test('should return the sum of multiple numbers separated by commas', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test('should handle newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
