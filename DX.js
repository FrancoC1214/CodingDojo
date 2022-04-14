function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

//Variables/Datos
//hello
//Dojo

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

//Variables/Datos
//hello
//   result/15
//result is, 15

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

//Variables/Datos
//num is, 3
//      num/3 -> 18
//  result/18
//result is, 18//

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

//Variable/Datos
//     num/15
//15
//    num2/10
//10
//  result/10
//10
//15

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

//Variable/Datos
//     num/15
//15
//    num2/10
//10
//  result/20
//20
//15

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

//    Variables/Datos
//timesTwoAgain/3 -> 6 \ 5 -> 10?
//num is, 3    \num is, 5
//            y/6 \ y/10
//result is, 16???

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))

 //Variables/Datos
 //  sumNums/2,3
 //5
 //  sumNums/3,5
 //8

 function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))

 //    Variable/Datos
 //printSumNums/2,3
 //2
 //5
 //printSumNums/3,5
 //3
 //8

 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

//Variables/Datos
//  sumNums/2,3 -> 5
//      sum/5
//sum is, 5
//  sunNums/3,5
//      sum/8
//sum is, 8
//   result/8 + 5 -> 13
//result is, 13

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);

//Variables/Datos
//  sumNums/2,3
//      sum/5
//sum is, 5
//  sumNums/2,1
//      sum/3
//sum is, 3
//  sumNums/3,3
//      sum/6
//sum is, 6
//  sumNums/3,5
//      sum/8
//sum is, 8
//   result/ 5 + 6 + 8 -> 19
//result is, 19