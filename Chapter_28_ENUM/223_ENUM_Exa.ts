enum BROWSER{
    CHROME = "CHROME",
    FIREFOX = "FIREFOX",
    SAFARI = "SAFARI",
    EDGE = "EDGE"
}

function launchBrowser(browser: BROWSER): void {
    switch (browser) {
        case BROWSER.CHROME:
            console.log("Launching Chrome browser...");
            break;  
        case BROWSER.FIREFOX:
            console.log("Launching Firefox browser...");
            break;
        case BROWSER.SAFARI:
            console.log("Launching Safari browser...");
            break;
        case BROWSER.EDGE:
            console.log("Launching Edge browser...");
            break;  
    }
    
}


launchBrowser(BROWSER.CHROME);
launchBrowser(BROWSER.FIREFOX);    
launchBrowser(BROWSER.SAFARI);
launchBrowser(BROWSER.EDGE);