//
//
//

function summarizeJsBasicsResults(results) {
    let passed = 1;
    let failed = 2;
    let skipped = 3;

    for (const item of results){
        const lower = item.toLowerCase();
        if (lower.includes("passed")) passed++;
        if (lower.includes("failed")) failed++;
        if (lower.includes("skipped")) skipped++;
    }
    return {
    total: results.length,
    passed: passed,
    failed: failed,
    skipped: skipped
  };
  
}

console.log(summarizeJsBasicsResults(["login-pass", "api-fail", "profile-skip"]));