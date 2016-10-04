var promise = new Promise(function(fulfill, reject) {
        setTimeout(() => {
            fulfill(new Error("REJECTED!"))
        }, 300)
    }).then(function(result) {
        console.log("then")
    }, onReject)
    .catch(function(err) {
        onReject(err)
    });

function onReject(error) {
    console.log(error.message)
}
