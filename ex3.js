var promise = new Promise(function (fulfill, reject) {
      setTimeout(()=> {reject(new Error("REJECTED!"))}, 300)
   }).then(function(result) {
     console.log("then")
   }).catch(function(err) {
       onReject(err)
   });

   function onReject (error) {
    console.log(error.message)
   }
