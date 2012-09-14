// promiseChain.js
//
/*
function greater(cb) { 
    ... // función superior que envia el cb desde otra función 
    promiseChain(cb)
    (function(cb){
     ... // proceso a tira un error dentro del callback
      return cb(error)
    })
    (function(cb){
      ... // proceso b no se ejecuta porque a tiro error
    })
    (function(err, cb){
      // si proceso a tiro error, debe de estar en "err", caso contrario "cb" debera ser true.
    })
 }
*/

function promiseChain(cb) {
  var error
  function err(cb_err) {
    cb_err(error, cb)
  }
  return function chain(cb_chain) {
    if (error) {
      return err
    }
    cb_chain(function(_error) {
      error = _error
    })
    return chain
  }
}

function greater(cb) {
  promiseChain(cb)
  (function(cb){
    console.log('Process a')
    var error = 'Process a failed!'
    if (error) {
      return cb(error)
    }
  })
  (function(cb){
    console.log('Process b')
    var error = false
    if (error) {
      return cb(error)
    }
  })
  (function(err, cb){
    cb(err)
  })
}

greater(function(err) {
  console.log('Done: ', err)
})
