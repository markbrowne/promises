var promise1 = Promise.reject(new Error('ERROR'));

var promise2 = Promise.resolve('RESOLVED');

promise1.catch(function(err) {
    console.error('THERE IS AN ERROR!!!');
    console.error(err.message);
});
