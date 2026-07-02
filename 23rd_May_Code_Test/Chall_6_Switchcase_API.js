function questionName(input) {
  
   let answer

// Evaluate the status code using a switch statement
switch (input) {
  case 200:
    answer = "PASS - OK: Request successful";
    break;
  case 201:
    answer = "PASS - Created: Resource created successfully";
    break;
  case 301:
    answer = "WARNING - Moved Permanently: URL has changed";
    break;
  case 400:
    answer = "FAIL - Bad Request: Check request payload";
    break;
  case 401:
    answer = "FAIL - Unauthorized: Check auth token";
    break;
  case 403:
    answer = "FAIL - Forbidden: Insufficient permissions";
    break;
  case 404:
    answer = "FAIL - Not Found: Check endpoint URL";
    break;
  case 500:
    answer = "FAIL - Internal Server Error: Backend issue";
    break;
  default:
    answer = "UNKNOWN - Unhandled status code";
}

  return answer;
}

console.log(questionName(200));