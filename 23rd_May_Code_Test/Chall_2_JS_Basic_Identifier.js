function isValidJsBasicsIdentifier(name) {
// Rule 1: Value must be a non-empty string after trimming
  if (typeof name !== 'string') return false;
  const trimmed = name.trim();
  if (trimmed === '') return false;

  // Rule 4: Reject specified reserved words
  const reservedWords = ['let', 'const', 'var', 'class', 'function', 'return'];
  if (reservedWords.includes(trimmed)) return false;

  // Rules 2 & 3: Valid JavaScript identifier regex
  // ^[a-zA-Z_$]      -> Starts with a letter, underscore, or dollar sign
  // [a-zA-Z0-9_$]*$  -> Remaining characters are letters, digits, underscores, or dollar signs
  const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

  return identifierRegex.test(trimmed);
}