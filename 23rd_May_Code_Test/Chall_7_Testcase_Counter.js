function questionName(input) {
  // 1. Initialize counters
  let passed = 0;
  let failed = 0;
  let skipped = 0;

  // 2. Loop through the array to count results
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "pass") {
      passed++;
    } else if (input[i] === "fail") {
      failed++;
    } else if (input[i] === "skip") {
      skipped++;
    }
  }

  // 3. Calculate total tests and pass rate
  const totalTests = input.length;
  
  // Ensure we don't divide by zero if an empty array is passed
  const passRate = totalTests > 0 ? ((passed / totalTests) * 100).toFixed(2) : "0.00";

  // 4. Determine the verdict based on failure count
  let verdict = "";
  if (failed === 0) {
    verdict = "All passed. Ready for release.";
  } else if (failed <= 2) {
    verdict = "Minor failures. Review before release.";
  } else {
    verdict = "Block release.";
  }

  // 5. Construct and return the final formatted string
  const answer = `Total Tests : ${totalTests} Passed: ${passed} Failed: ${failed} Skipped: ${skipped} Pass Rate: ${passRate}% VERDICT: ${verdict}`;

  return answer;
}

// Example Execution:
const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
console.log(questionName(testResults)); 
// Output: Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.