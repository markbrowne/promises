var p1 = first()

var p2 = p1.then((val) => {
    return second(val)
})

p2.then(console.log)
