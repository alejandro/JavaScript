// simple_test.js
//
// Here we ask to the user to answer with the name
// of the color that results by mixing two other base colors.
//
// By Daniel Rodríguez @sadasant
//
// License: GNU GPL 3.0
//

// Dependencies:
const assert = require('assert')
    , readln = require('readline').createInterface({
        input  : process.stdin
      , output : process.stdout
      })

// Colors
var base_colors = [
      'red'
    , 'blue'
    , 'yellow'
    ]
  , result_colors = {
      'redblue'      : 'purple'
    , 'bluered'      : 'purple'
    , 'redyellow'    : 'orange'
    , 'yellowred'    : 'orange'
    , 'blueyellow'   : 'green'
    , 'yellowblue'   : 'green'
    , 'redred'       : 'red'
    , 'blueblue'     : 'blue'
    , 'yellowyellow' : 'yellow'
    }

function getRandomColor() {
  return base_colors[Math.floor(Math.random() * base_colors.length)]
}

function askColors() {
  var question = '\nWhat\'s the result of mixing'
    , color1   = getRandomColor()
    , color2   = getRandomColor()
  question += ' ' + color1 + ' and'
  question += ' ' + color2 + '?\n'
  readln.question(question, function(answer) {
    answer = answer.toLowerCase()
    assert.deepEqual(result_colors[color1 + color2], answer, 'Oops, you failed.')
    console.log('You were right!\n')
    askAgain()
  })
}

function askAgain() {
  readln.question('Once again? (y/n)\n', function(answer) {
    answer = answer.toLowerCase()
    assert.equal(answer, 'y', 'Well, see you next time!')
    askColors()
  })
}

askColors()
