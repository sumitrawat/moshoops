function StopWatch(){
    var startTime=0;
    var endTime=0;
    var duration=0;
    this.start=function(){startTime=new Date()}
    this.stop=function(){endTime=new Date();}
    this.reset=function(){endTime=startTime=duration=0;}
    this.print=function(){console.log((endTime.getTime()-startTime.getTime()))}
}



var sw=new StopWatch();
sw.start();

setTimeout(function(){console.log('time to do something')
sw.stop();
sw.print();

},1000);


var sw2=new StopWatch();
sw2.start();
setTimeout(function(){
    sw2.stop();
    sw2.print();
},2000)
