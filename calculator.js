function add(a, b) {
  return parseFloat(a)+parseFloat(b)
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b)
}

function sub(a, b) {
  return a - b
}

module.exports = {
  add,
  multiply,
  sub
}
