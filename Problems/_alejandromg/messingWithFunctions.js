// messingWithFunctions.js
//
// Make a function that can mess other function's
// childs.
//

var C = (function() {
  var greeting = ' saludos!'
  function mainObject(name) {
    this.name  = name
    this.hello = function() {
      return name + greeting
    }
  }
  mainObject.editGreeting = function(newGreeting) {
    greeting = newGreeting
  }
  return mainObject
})()

var obj1 = new C('Andres')
  , obj2 = new C('Daniel')

console.log(obj1.hello())
console.log(obj2.hello())

C.editGreeting(' what\'s up!')

console.log(obj2.hello())
console.log(obj1.hello())
