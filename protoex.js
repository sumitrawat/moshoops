function Report(name, author){
    this.name=name;
    this.author=author;
   
    this.helloDept=function(){
        console.log(`${this.Department}`);
    }
}


Report.prototype.Department="Finance"

var financeReports=[new Report('Finance Quarterly','Sumit'), new Report('Finance Monthly, Kim'), new Report('Finance Yearly', 'David')];
var hrReports=[new Report('HR Quarterly','Sumit'), new Report('HR Monthly, Kim'), new Report('HR Yearly', 'David')];
//prototype is single instance for the constructor function
Report.prototype.company="BAH"
/*
financeReports.map((rep)=>{
    console.warn("+++++++++Reports+++++++++")
    for(key in rep){
        console.log(`${key}: ${rep[key]}`)        
    }
})

Report.prototype.company="Booz"

hrReports.map((rep)=>{
    console.warn("+++++++++Reports+++++++++")
    for(key in rep){
        console.log(`${key}: ${rep[key]}`)        
    }
})
*/
/////////////////////////Properties
console.warn(`++++++++Properties of the object`)
let obj={name:'test'}
obj.name='another test'
console.log(obj.name);
