function filterSupportedJsBasicsTopics(topics) {
  // Define the set of canonical topics allowed by Chapters 1 to 3
  const supportedTopics = new Set([
    "node", "v8", "comments", "identifiers", 
    "literals", "null", "undefined", "equality"
  ]);

  const result = [];
  const seen = new Set();

  for (let i = 0; i < topics.length; i++) {
    // 1. Trim whitespace and convert to lowercase
    let cleaned = topics[i].trim().toLowerCase();

    // 2. Check if it's a supported chapter topic and hasn't been added yet
    if (supportedTopics.has(cleaned) && !seen.has(cleaned)) {
      seen.add(cleaned);
      result.push(cleaned);
    }
  }

  return result;
}