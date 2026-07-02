function runTestSuite(testCases) {
  // const: fixed configuration and fallback bounds
  const TOTAL_TESTS = testCases.length;
  const FALLBACK_TYPE = "strictEqual";

  // var: globally/function-scoped counters tracking execution suite state
  var passCount = 0;
  var failCount = 0;
  var errorCount = 0;

  let reportDetails = "";
  let overallResult = "PASSED";

  // for loop: iterate through each test case
  for (let i = 0; i < TOTAL_TESTS; i++) {
    let tc = testCases[i];
    
    // Identifiers and safety assignment using Nullish Coalescing (??)
    let tcName = tc.name ?? "Unnamed Test Case";
    let compType = tc.type ?? FALLBACK_TYPE;
    let actual = tc.actual;
    let expected = tc.expected;

    let isPassed = false;
    let logDetail = "";

    // switch statement: handle different comparison types
    switch (compType) {
      case "strictEqual":
        // strict equality operator (===)
        isPassed = (actual === expected);
        logDetail = `(${actual} === ${expected})`;
        break;

      case "looseEqual":
        // loose equality operator (==)
        isPassed = (actual == expected);
        logDetail = `(${actual} == ${expected})`;
        break;

      case "typeCheck":
        // typeof checks and strict inequality (!==)
        isPassed = (typeof actual === typeof expected);
        logDetail = `(typeof ${actual} [${typeof actual}] === typeof ${expected} [${typeof expected}])`;
        break;

      case "truthy":
        // logical operator (&&) to evaluate truthiness
        isPassed = (actual ? true : false);
        logDetail = `(!!${actual})`;
        break;

      case "lessThan":
        // relational and logical operator verification
        isPassed = (typeof actual === "number" && typeof expected === "number" && actual < expected);
        logDetail = `(${actual} < ${expected})`;
        break;

      default:
        errorCount++;
        reportDetails += `⚠️ TC-${String(i + 1).padStart(2, '0')}: ${tcName} → ERROR (Unknown comparison type: ${compType})\n`;
        continue; // skip further evaluation for this iteration
    }

    // if-else condition to track operational counters
    if (isPassed) {
      passCount++;
      reportDetails += `✅ TC-${String(i + 1).padStart(2, '0')}: ${tcName} → PASS ${logDetail}\n`;
    } else {
      failCount++;
      reportDetails += `❌ TC-${String(i + 1).padStart(2, '0')}: ${tcName} → FAIL ${logDetail}\n`;
    }
  }

  // while loop: calculate consecutive passes from start
  let consecutivePasses = 0;
  let wIdx = 0;
  while (wIdx < TOTAL_TESTS) {
    let tc = testCases[wIdx];
    let compType = tc.type ?? FALLBACK_TYPE;
    let passCheck = false;

    if (compType === "strictEqual") passCheck = (tc.actual === tc.expected);
    else if (compType === "looseEqual") passCheck = (tc.actual == tc.expected);
    else if (compType === "typeCheck") passCheck = (typeof tc.actual === typeof tc.expected);
    else if (compType === "truthy") passCheck = (tc.actual ? true : false);
    else if (compType === "lessThan") passCheck = (tc.actual < tc.expected);

    if (passCheck) {
      consecutivePasses++;
    } else {
      break; // break immediately on encountering first non-passing state
    }
    wIdx++;
  }

  // do...while loop: locate index of first failure (-1 if none)
  let firstFailureIdx = -1;
  let dIdx = 0;
  if (TOTAL_TESTS > 0) {
    do {
      let tc = testCases[dIdx];
      let compType = tc.type ?? FALLBACK_TYPE;
      let passCheck = false;

      if (compType === "strictEqual") passCheck = (tc.actual === tc.expected);
      else if (compType === "looseEqual") passCheck = (tc.actual == tc.expected);
      else if (compType === "typeCheck") passCheck = (typeof tc.actual === typeof tc.expected);
      else if (compType === "truthy") passCheck = (tc.actual ? true : false);
      else if (compType === "lessThan") passCheck = (tc.actual < tc.expected);

      if (!passCheck) {
        firstFailureIdx = dIdx + 1; // 1-based tracking index
        break;
      }
      dIdx++;
    } while (dIdx < TOTAL_TESTS);
  }

  // Logical operators (||) and ternary evaluation for pass rates and execution suite validation
  let passRate = TOTAL_TESTS > 0 ? ((passCount / TOTAL_TESTS) * 100).toFixed(2) : "0.00";
  overallResult = (failCount > 0 || errorCount > 0 || TOTAL_TESTS === 0) ? "❌ FAILED" : "🚀 PASSED";

  let summaryReport = reportDetails + 
    `--------------------------------------------------\n` +
    `Pass Rate: ${passRate}% | Consecutive Passes: ${consecutivePasses} | First Failure TC: ${firstFailureIdx !== -1 ? 'TC-' + String(firstFailureIdx).padStart(2, '0') : 'None'}\n` +
    `Overall: ${overallResult}`;

  return summaryReport;
}

console.log(runTestSuite([
  { name: "Test Case 1", actual: 5, expected: 5, type: "strictEqual" },
  { name: "Test Case 2", actual: "hello", expected: "hello", type: "looseEqual" },  
    { name: "Test Case 3", actual: 10, expected: 20, type: "lessThan" },
    { name: "Test Case 4", actual: true, expected: true, type: "truthy" },
    { name: "Test Case 5", actual: 42, expected: "42", type: "typeCheck" },
    { name: "Test Case 6", actual: 15, expected: 10, type: "lessThan" },
    { name: "Test Case 7", actual: null, expected: null, type: "truthy" },
    { name: "Test Case 8", actual: 100, expected: 100, type: "strictEqual" },
    { name: "Test Case 9", actual: "test", expected: "test", type: "looseEqual" },
    { name: "Test Case 10", actual: 5, expected: 10, type: "lessThan" },
    { name: "Test Case 11", actual: false, expected: true, type: "truthy" },    
    { name: "Test Case 12", actual: 3.14, expected: 3.14, type: "strictEqual" },
    { name: "Test Case 13", actual: "abc", expected: "abc", type: "looseEqual" },
])); 