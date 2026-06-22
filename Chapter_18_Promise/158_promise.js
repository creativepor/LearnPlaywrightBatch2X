let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered. Food is ready. ");
    } else {
        reject("Order cancelled because of rain.")
    }
})

console.log(order);

// For the false case, we can use .catch and .then to handle the promise rejection and resolution respectively.
let order = new Promise(function (resolve, reject) {
    let foodready = false;

    if (foodready) {
        resolve("Pizza is delivered. Food is ready.");
    } else {
        reject("Order cancelled because of rain.");
    }
});

order
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });