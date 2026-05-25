function getJsBasicsKeywordMeaning(term) {
  if (typeof term !== 'string') return "unknown";

  const normalized = term.trim().toLowerCase();

  const dictionary = {
    "node": "runtime",
    "null": "intentional absence",
    "undefined": "unassigned value",
    "let": "block scope variable",
    "const": "block scope constant",
    "var": "function scope variable"
  };

  return dictionary[normalized] || "unknown";
}