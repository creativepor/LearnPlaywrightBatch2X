// Single quotes
let single = 'Hello World';
let withDouble = 'She said "hi"';

// Double quotes
let double = "Hello World";
let withSingle = "It's a test";


let c = 'c';
let c1 = 'cc';
console.log(typeof c);
console.log(typeof c1);
console.log(typeof double);

// 'JavaScript prefers to use single code. '












function getAPIStatusCode(code) {
  if (code >= 200 && code <= 299) {
    return "Success";
  } else if (code >= 300 && code <= 399) {
    return "Redirection";
  } else if (code >= 400 && code <= 499) {
    return "Client Error";
  } else if (code >= 500 && code <= 599) {
    return "Server Error";
  } else {
    return "Invalid";
  }
}

// Sample usage:
console.log(getAPIStatusCode(200)); // "Success"
console.log(getAPIStatusCode(301)); // "Redirection"
console.log(getAPIStatusCode(404)); // "Client Error"
console.log(getAPIStatusCode(500)); // "Server Error"
console.log(getAPIStatusCode(999)); // "Invalid"

