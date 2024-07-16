function calculate(num1,num2){
    function operation(num1,num2,callback){
       return  callback(num1,num2)
    }
 function add (x,y){
    return x+y;
 }
 function multiply(x,y){
    return x*y;
 }

 let additionResult = operation(num1,num2,add);
 console.log(`Addition of ${num1} and ${num2} is ${additionResult}`)


 let multiplicationResult = operation(num1,num2,multiply)
 console.log(`multiplication of ${num1} and ${num2} is ${multiplicationResult}`)
}
 calculate(4,6)