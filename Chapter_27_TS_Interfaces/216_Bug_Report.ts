interface BugReport {
    id: number;
    title: string;
    severity: string
    stepsToReproduct: string[];

}

const bugReport1: BugReport = {
    id: 1,
    title: "title",
    severity: "High",
    stepsToReproduct: ["step1", "step"]
}

const bugReport2: BugReport = {
    id: 2,
    title: "title",
    severity: "High",
    stepsToReproduct: ["step1", "step"]
}
const bugReport3: BugReport = {
    id: 2,
    title: "title",
    severity: "High",
    stepsToReproduct: ["step1", "step"]
}

const bugReports: BugReport[] = [bugReport1, bugReport2, bugReport3];
console.log("Bug Reports:", bugReports);