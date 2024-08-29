function addUpto(n){
    return n*(n+1)/2;

}

var time1=performance.now();
console.log(total);
var total =addUpto(100);
console.log(total);
var time2=performance.now();
console.log(`Time Elapsed:${(time2-time1)/1000}seconds.`);


console.log(time1+"   time1");
console.log(time2+"  time2");


