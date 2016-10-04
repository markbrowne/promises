var promise = new Promise(function(fulfill, reject) {
    setTimeout(() => {
        fulfill('I FIRED')
        reject(new Error("I DID NOT FIRE"))
        fulfill(onRejected, 'I FIRED')
    }, 300)
}).then(console.log, onRejected);

function onRejected(error) {
    console.log(error)
}
