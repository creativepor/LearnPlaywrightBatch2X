function questionName(isPresent, isDisplayed, isEnabled) {
  let status, severity, action;
  if (!isPresent) {
    status = "NotFound";
    severity = "Critical";
    action = "Element is missing from the DOM. Verify the selector again"
  }
  else if (!isDisplayed) {
    status = "HIDDEN";
    severity = "WARNING";
    action = "Element is present in the DOM but hidden.";

  } else if (!isEnabled) {
    status = "DISABLED";
    severity = "WARNING";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
  } else {
    status = "READY";
    severity = "OK";
    action = "Element is fully ready for interaction.";

  }
 return `Status: ${status} Severity: ${severity} Action: ${action}`;
}
console.log(questionName(false, false, false));
