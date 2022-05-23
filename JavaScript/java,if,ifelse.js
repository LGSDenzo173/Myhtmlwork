
// var umar ="hi umar"
// alert("hi Umar");
// var withdarawAmount = prompt("Enter withdarawAmount");
// var ToatlAmount = 5000;
//
// if (ToatlAmount>=withdarawAmount) {
//   ToatlAmount-=withdarawAmount;
//   console.log("You withdarawAmount " + withdarawAmount);
//   console.log("Remaining Amount is : "+ ToatlAmount);
//
// }
// var val1 = 23;
// var val2 = "21";
//  if (val1 == val2) {
//    console.log("Both number are Equal");
//
//  }
//  else {
//    console.log("Numbers Are not Equal");
//  }
// if (1===1 && 2===2 || "umar"==="zia") {
//   console.log("These both are true");
//
// }
// if(true && false){
//   console.log("These are Same!");
// }
// else {
//   console.log("these are not true");
// }
// var cat1 = 25;
// var cat2 = 15;
// var cat3 = 30;
// if (cat1 > cat2 && cat1 > cat3) {
//   console.log("CAt 1 is begger than all");
//
// // }else if (cat2>cat1 & cat2>cat3) {
// //   console.log("Cat 2 is bigger than all");
// //
// // }else {
// //   console.log("Cat 3 is begger");
// // }
// //
// // var total = 10;
// // for (var i = 0; i < total; i++) {
// //   console.log(i);
// // }
// // var student = ["umar" , "usman" , "ali" , "Zia"];
// // for (var index = 0; index < student.length; index++){
// //   console.log(student[index]);
// // }
// // function mul(num1,num2) {
// //   return num1*num2;
// // }
// // var multiplication = mul(13,15)
// // console.log(multiplication);
//
//
//
//Function understanding
// var bankBalance = 500;
// function makeTransaction(priceOfSale) {
//   if (priceOfSale<=bankBalance) {
//     bankBalance-=priceOfSale
//     console.log("Payment Successful");
// }else {
//   console.log("Not enough maoney");
// }}
// console.log(bankBalance);
// makeTransaction(90)
// console.log(bankBalance);
// makeTransaction(14.95);
//
// console.log(bankBalance);
// makeTransaction(120.95);
//
// var trancsaction = function(priceOfSale) {
//   if (priceOfSale<=bankBalance) {
//     bankBalance-=priceOfSale
//     console.log("Payment Successful");
// }else {
//   console.log("Not enough maoney");
// }}
// trancsaction(400);
//  var printCustomerName = function (first,last) {
//    console.log("first Name " + first +" Last Name " + last);
//   }
//   printCustomerName("UMAR", "KHAN")
//   var applyForCreditCard = function(creditScore, soul){
//     // Call some function to process application
//   }
// bankOperaion.push(trancsaction);
// bankOperaion.push(printCustomerName);
// bankOperaion.push(applyForCreditCard);



 //Object understanding
 // var student = [];
 //  function students(first , last , age) {
 //    this.firstName = first;
 //    this.lastName = last,
 //    this.age = age;
 //    this.greeting= function() {
 //      return  "Hi, I'm " + this.firstName + " and I'M " + this.age + "years old.";
 //    }
 //
 //  }
 //  var students = student[0]
 //  for (var key in student) {
 //    console.log(student[key]);
 //  }
 //  // student.push(new students("umar","khan",19));
  // student.push(new students("khani","jan",29));
  // student.push(new students("Zia","khan",39));
  //
  // for (var index = 0; index < student.length; index++){
  //   var students = student[index]
  //   console.log(students.greeting());
  //
  // }
//   var student = [];
//   function khanjee(first,last,age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.greeting = function() {
//       return "HI, my name " + this.firstName + "and my Age is " + this.age+" years old";
//     }
//   }
//   student.push(new khanjee("umar","khan", 17));
//   student.push(new khanjee("Tifanny","khan", 17));
//   student.push(new khanjee("ali","khan", 17));
// for (var i = 0; i < student.length; i++) {
//  var students = student[i];
//  console.log(students.greeting());
// }



//JavaScript binding

this.car = "Ferarri";

var marksGerage = {
  car : "Aston Martin",
  getCar : function(){
    return this.car;
  }
};
console.log(marksGerage.getCar());

var GetuseforLater = marksGerage.getCar;
console.log(GetuseforLater());
//our result is change so we Use bind function
var finalresult = marksGerage.getCar.bind(marksGerage);
console.log(finalresult());
