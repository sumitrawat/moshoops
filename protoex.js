function Report(name, author){
    this.name=name;
    this.author=author;
}

Report.prototype.company="BAH"

var financeReports=[new Report('Finance Quarterly','Sumit'), new Report('Finance Monthly, Kim'), new Report('Finance Yearly', 'David')];
var hrReports=[new Report('HR Quarterly','Sumit'), new Report('HR Monthly, Kim'), new Report('HR Yearly', 'David')];
//prototype is single instance for the constructor function
Report.prototype.company="Booz"

financeReports.map((rep)=>{
    console.warn("+++++++++Reports+++++++++")
    for(key in rep){
        console.log(`${key}: ${rep[key]}`)        
    }
})

hrReports.map((rep)=>{
    console.warn("+++++++++Reports+++++++++")
    for(key in rep){
        console.log(`${key}: ${rep[key]}`)        
    }
})
