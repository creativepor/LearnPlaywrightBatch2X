function retryFailedAPICall() {
  // ADD YOUR CODE HERE
  let attempt = 1;
  let isSuccessful = false;

  do {
    attempt++;
    const randomValue = Math.random();
    
    // 40% chance of success (randomValue > 0.6)
    if (randomValue > 0.6) {
      isSuccessful = true;
      console.log(`Attempt ${attempt}: ✅ SUCCESS (Response 200 OK)`);
    } else {
      console.log(`Attempt ${attempt}: ❌ FAILED (Timeout/Error)`);
    }

  } while (!isSuccessful && attempt < 5);

  if (isSuccessful) {
    console.log(`API call PASSED after ${attempt} attempt(s).`);
  } else {
    console.log(`API call FAILED after maximum ${attempt} attempts.`);
  }

  return isSuccessful;
}
retryFailedAPICall();
