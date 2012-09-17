// first100numbers.js
//
// An autoexecutable function
// which returns the 100 first numbers
// without conditionals or cycles.
//

(function first100numbers(n) {
  function print5() {
    console.log(n++)
    console.log(n++)
    console.log(n++)
    console.log(n++)
    console.log(n++)
  }
  function print25() {
    print5(); print5()
    print5(); print5()
    print5()
  }
  (function print100() {
    print25(); print25()
    print25(); print25()
  })()
})(0)
