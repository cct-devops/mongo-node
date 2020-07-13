const calculator = require('./calculator')


test('add two positive numbers', () => {
  expect(calculator.add(1,2)).toBe(3)
})

test('negative numbers added are still negative', () => {
  expect(calculator.add(-1, -2)).toBe(-3)
})

test('test for float numbers', () => {
  expect(calculator.add(3.2, 3.3)).toBe(6.5)
})

test('test for strings', () => {
  expect(calculator.add("3.2", "3.3")).toBe(6.5)
})

test('substraction two positive numbers', () => {
  expect(calculator.sub(5, 3)).toBe(2)
})

test('substraction two negative numbers', () => {
  expect(calculator.sub(-2,-3)).toBe(1)
})

