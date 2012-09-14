// fizzbuzz.js
//
// It receives a number as an argument,
// if the number is multiple of 3, it must return 'fizz'
// if the number is multiple of 5, it must return 'buzz'
// if the number is multiple of 3 and 5, it must return 'fizzbuzz'
// else, it returns nothing.
//

function fizzbuzz(number) {
  var answer = ''
  if (!(number % 3)) {
    answer = 'fizz'
  }
  if (!(number % 5)) {
    answer += 'buzz'
  }
  return answer
}

for (var i = 1; i < 20; i++) {
  console.log('For ' + i + ': ' + fizzbuzz(i))
}
