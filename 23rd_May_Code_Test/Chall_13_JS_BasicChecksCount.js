//
//
//

function countPassingJsBasicsChecks(checks){
    return checks.filter(item => item.toLowerCase().includes("pass")).length;
}

console.log(countPassingJsBasicsChecks(["one-fail", "two-skip"]));
console.log(countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"]));
console.log(countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"]));
