 for (var i = 0; i < 3; i++) {
     setTimeout(() => console.log(i), 100);
   }

   for (let j = 0; j < 3; j++) {
     setTimeout(() => console.log(j), 100);
   }


//Shared Variable: var does not have "block scope." This means there is only one single i variable for the entire loop.

//The Delay: setTimeout is asynchronous. It tells JavaScript: "Wait 100ms, then run this console.log."

The Race: The loop finishes almost instantly. By the time the 100ms is up and the first console.log runs, the loop has already completed.

//Final Value: At the end of the loop, i has been incremented to 3. Since all three timeouts are looking at that same shared i, they all print 3.   