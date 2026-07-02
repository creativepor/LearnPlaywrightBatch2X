enum severityLevels{
    low = "LOW",
    medium = "MEDIUM",
    high = "HIGH",  
    critical = "CRITICAL",
    showstopper = "SHOWSTOPPER"
}
console.log(severityLevels.low);

enum Environment {
     Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}
console.log(Environment.Dev);