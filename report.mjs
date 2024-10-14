import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOfflineException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json"

function error(){
    throw new Error("error noh")
}

error()