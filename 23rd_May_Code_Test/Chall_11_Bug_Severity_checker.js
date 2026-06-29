// Bug Severity Checker

function classifyBugSeverity(frequency, impact) {

  // Normalize inputs to avoid casing issues
  const freq = frequency.toLowerCase();
  const imp = impact.toLowerCase();

  // Initialize variables for priority and action
  let priority = "";
  let action = "";

  if (freq === "always") {
    if (imp === "blocker") {
      priority = "P0";
      action = "Critical: Stop release immediately";
    } else if (imp === "major") {
      priority = "P1";
      action = "High: Fix before release";
    } else if (imp === "minor") {
      priority = "P2";
      action = "Medium: Fix in current sprint if possible";
    }
  } else if (freq === "often") {
    if (imp === "blocker") {
      priority = "P1";
      action = "High: Fix before release";
    } else if (imp === "major") {
      priority = "P2";
      action = "Medium: Fix in current sprint if possible";
    } else if (imp === "minor") {
      priority = "P3";
      action = "Low: Add to backlog";
    }
  } else if (freq === "rarely") {
    if (imp === "blocker") {
      priority = "P2";
      action = "Medium: Fix in current sprint if possible";
    } else if (imp === "major") {
      priority = "P3";
      action = "Low: Add to backlog";
    } else if (imp === "minor") {
      priority = "P4";
      action = "Trivial: Fix when time permits";
    }
  }

  return `Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: ${priority} - ${action}`;
}

console.log(classifyBugSeverity("Always", "Blocker"));
console.log(classifyBugSeverity("Often", "Major"));
console.log(classifyBugSeverity("Rarely", "Minor"));