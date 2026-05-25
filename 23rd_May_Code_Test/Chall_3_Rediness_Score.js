function classifyJsBasicsScore(score) {
 if (score >= 90) {
    return "EXCELLENT";
  } else if (score >= 75) {
    return "GOOD";
  } else if (score >= 50) {
    return "NEEDS_PRACTICE";
  } else {
    return "REVISIT";
  }
}