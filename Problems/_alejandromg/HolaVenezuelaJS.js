// HolaVenezuelaJS.js
//
// Make a functon that could let you do this:
//
//   f('Hola ')('Venezuela')('JS')() + f('!!!')() === 'Hola VenezuelaJS!!!'
//

function f(string) {
  if (string) {
    this.string = (this.string || '') + string
    return f.bind(this)
  } else {
    string = this.string
    this.string = ''
    return string
  }
}

console.log(f('Hola ')('Venezuela')('JS')() + f('!!!')() === 'Hola VenezuelaJS!!!')
