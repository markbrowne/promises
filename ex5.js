var promise = new Promise(function(fulfill, reject) {

    fulfill('PROMISE VALUE')

}).then(console.log, null);

console.log('MAIN PROGRAM')
