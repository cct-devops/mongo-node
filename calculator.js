function add(a, b) {
  if ( a < 0) {
    return 0
  }
  return parseFloat(a)+parseFloat(b)
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b)
}

module.exports = {
  add,
  multiply
}
