// unconditionalIntegerSort.js
//
// Order an array without conditionals.
//
// Conditionals meaning:
// If, else, &&, ||, ? :
//
// A. K. A. : Merge Sort Inplace
//            // With whiles
//

function merge(a, b) {
  while (a.length) {
    while (b.length) {
      while (a[0] < b[0]) {
        return [a[0]].concat(merge(a.slice(1), b))
      }
      return [b[0]].concat(merge(a, b.slice(1)))
    }
    return a
  }
  return b
}

function mergesort(array) {
  while (array.length - 1) {
    var half = Math.floor(array.length/2)
      , tail = array.splice(half)
    return merge(mergesort(array), mergesort(tail))
  }
  return array
}

console.log(mergesort([5,1,6,4]))
console.log(mergesort([5,1,-6,-4]))
console.log(mergesort([6,4,1,5]))
