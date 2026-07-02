interface BasePage {
    url: string;
    title: string;
}

// Define the LoginPage interface that extends BasePage
interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;

}

// Define the FreeTrialPage interface that extends BasePage
interface FreeTrialPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}
// Create an object that adheres to the LoginPage interface
let loginPage: LoginPage = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
}
// Create an object that adheres to the FreeTrialPage interface
let freeTrialPage: FreeTrialPage = {
    url: "/free-trial",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit",
}
// Log the details of the pages
console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username field:", loginPage.usernameSelector);

console.log(" ------- ");


console.log("URL:", freeTrialPage.url);
console.log("Title:", freeTrialPage.title);
console.log("Username field:", freeTrialPage.usernameSelector);