'use strict';

var promise = new Promise(function(fulfill, reject) {
    setTimeout(()=> {fulfill('FULFILLED!')}, 300)
}).then(function(result) {
    console.log(result)
}).catch(function(err) {
    // an error happened somewhere in the process
});
