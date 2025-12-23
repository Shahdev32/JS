
// let name  = "shahdev";
// let str = "llovecoding";
// str.indexOf("love"); //1
// str.indexOf("J"); //-1
// str.indexOf("c"); //5







// // method chainging
// let msg = "        hello         ";
// let newMsq = msg.trim();
// console.log("after trim", newMsq);
// newMsq = newMsq.toUpperCase();
// console.log("after upper case: "newMsq);


// // slice method
// // slice(start, ending);
// let str = "llovecoding";
// str.slice(1,4)
// str.slice(3,4);
// str.slice(-1); // length is 11 so 11-1 = 10 anser


// // replace method
// // only replace once occurance
// let str = "llovecoding";
// str.replace("love","do");
// str.replace("o","x");


// // repeat method
// let str = "Mango";
// str.repeat(3);
// str.repeat(10);


// // Exercise
// let msg = "help!";
// console.log(msg.trim().toUpperCase());



// // array


// let studnet1 = "Kumar";
// let studnet2 = "khushal";
// let studnet3 = "das";


// let student = ["kumar", "Khushal", "das"];
// let num = [2,4,6,8];
// let marks = [99,98,68,42, 100];
// let info = ["Kumar", 23, 89.9];  // mixed arrray
// let newArr = []; // empty array
// info[0] // 'Kumar'
// info[0][0] // K

// array are mutuable can be change
// let fruits = ["mango", "banana", "apple"];
// fruits[0] = "pineapple";
 // array method

// let car = ["audi", "bmw", "maruti", "xod"];
// car.push("totoya"); // add from last
// car.pop();  // delete from last
// car.shift() / delete from start
// car.unshift("ss"); // start



// let primary = ["red", "yellow", "green"];
// primary.indexOf("red");
// primary.indexOf("green");
// primary.indexOf("Green");  // -1
// primary.includes("red");   // true
// primary.includes("dd"); // false

// let secondary = ["blue", "pink"];

// primary.concat(secondary);
// primary.reverse();


//let colors = ["red", "yello", "pink", "blue", "orange"];
// colors.slice();
// colors.slice(2);
// colors.slice(2,3);
// colors.slice(-2);


// colors.splice(4);
// colors.splice(0,1);
// colors.splice(0,1,"black", "grey");


// let days = ["monday", "tudesday", "wednesday", "thruday", "friday", "saturday", "sunday"];
// let num = [23,33,44,55,6,22,56];
// // they dont sort becuase it first conver into char and then sort it 
// // it is only applicable for the string 

// [1]==[1] // fales because of memory address which is called array refrences
// [1]===[1] // false

// let arr = ["a", "b", "c"];
// let arrCopy = arr;
// arrCopy.push("d");


// cont arr = [1,2,3,4,5];
// const arr = [1,2,3]
// arr.push(4);
// arr.pop()
// arr = newarr // we can not assigment to constant variable 
// we can change the value but we can not keep the address of another arry. array refrences

// nested array or mutli dimonal arrays
// let nums = [[2,3], [3,6], [4,8]];
// num[0][0];

//let tic_tac_toe = [['X',null,'O'], [null,'X','O',],['O',null,'X']];



// for(int i=1;i<=5;i++){
//     console.log(i);
// }


// js object literals
// property => (key, value)

// let delhi = {
//     latitude: "25.23232"
//     longitude : "555.4323"

// };

// const student = {
//     name: "Kumar",
//     age:23,
//     marks: 34.4,
//     city: "Delhi",
// };


// const item = {
//     price: 100.99,
//     discunt:50,
//     colors:["red","pink"],

// };


// const post ={
//     username: "Kumar",
//     content: "this is my #first post",
//     likes: 50,
//     reposts: 65,
//     tags: ["coding", "delta", "programming"],
// };



// const obj = {
//     1:"a",
//     2:"b",
//     true: "c",
//     null:"d",
//     undefined: "e",
// };

// object keys to strings

// const student = {
//     name:"kumar",
//     age: 23,
//     city: "Karachi",

// };


// object of Objects

// const classInfo = {
//     aman:{
//         grade:"A",
//         city:"Karachi",

//     },
//     kumar:{
//         grade:"B",
//         city:"Hyderabad",
//     },
//     dev:{
//         grade:"C",
//         city:"Mithi",

//     },
// };


// array of objects
// const classInfo = [
//     {
//      name:"aman",
//     grade:"A",
//     city:"Karachi",

//     },
//     {
//         name: "kumar",
//         grade:"B",
//      city:"Hyderabad",

//     },
//     {
//         name:"dev",
//         grade:"C",
//         city: "Mithi",

//     },


// ];





// random number genenrate from 1 to 10
// let step1 = Math.random();

// let step2 = step1*10;
// let step3 = Math.floor(step2);
// let step4 = step3+1;


// Math.floor(Math.random()*100)+1;

//const max = prompt("enter the max number");
//console.log(max);

//const random = Math.floor(Math.random()*max)+1;
//console.log(random);




// let guess = prompt("guess the number")
// while(guess){
//     if(guess == "quit"){
//             console.log("user quit");
//             break;
//     }
//     if(guess == random){
//         console.log("u are right");
//         break;
//     }
//     else if(guess< random){
//         prompt("u guess was too small , please try again");
//     }
//     else{
//         prompt("u guess was too large , please try again");
//     }

    // else{
    //     guess = prompt("you guess was wrong. please try again");

    // }

    
    
//}





//  function hello(){
//     console.log("Hello")
//  }

//  function prinName(){
//     console.log("my name is kumar");
//  }

//  function printLoop(){
//     for(let i =1;i<=5;i++){
//         console.log(i);

//     }
//  }

//  function isAdult(){
//     let age =16;
//     if(age>=16){
//         console.log("adult");
//     }
//     else{
//         console.log("not adult");

//     }
//  }

//  function printPoem(){
//     console.log("Twinkle Twinkel little start");
//     console.log("Twinkle Twinkel little start");
//  }


// function randomGenerate(){
//     let random = Math.random(Math.floor()*6)+1;
//     console.log(random);
// }


// function printInfo(name, age){
//     console.log(`${name}s age is ${age}`);
// }


// function printTable(n){
//     for(let i =n;i<=n*10;i+=n){
//         console.log(i);

//     }
// }



// function sum(a,b){
//     return a+b;

// }





//  hello();
//  prinName();
//  printLoop();
//  isAdult();
//  printPoem();
//  randomGenerate();
//printInfo("Kumar", 23);
//printTable(10);

// sum(3,4); // return this value.
// let s=sum(3,4);
// console.log(s);



// function expression

// let name = "Shadhev"
// let sum = function(a,b){
//     return a+b;

// }

// let hello = function(){
//     console.log("hello");
// }


// function multipleGreet(func, count){ // higher order function 

//     for(let i =1;i<=count;i++){
//         func();

//     }
// }

// let greet = function(){
//     console.log("hello");
// }


// multipleGreet(greet,100);





// function oddOrEvenFactory(request){
//   if(request == "odd"){
//   return function(){
//         console.log(!(n%2 == 0));
    
//     } 


//   }
//   else if(request == "Even"){
// return function(){
//         console.log(n%2 == 0);
    
//     }
 


//   }
//   else{
//     console.log("wrong request");
     
//   }

// }
// let request = "odd"


// const calculator = {
//     let num =55;

//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// }

// const calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mult(a,b){
//         return a*b;
//     }
// }




// const student = {
//     name: "Kumar",
//     age: 23,
//     phy:54,
//     getAvg()
// }



// 



// const sum = (a,b)=>{
//     console.log(a+b);
// }

// const cube = n=>{
//     return n*n*n;
// };


// console.log("Hi there");
// setTimeout( ()=>{
//     console.log("shahdev kumar ");
// },4000);
// console.log("WElcome to ");



// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     console.log("button was clicked");

// }



// function hello(){
//     console.log("hello");
// }
//  function demo(){
//     hello();
//  }

//  demo();



// function one(){
//     return 1;
// }

// function two(){
//     return one()+ one();
// }

// function three(){
//     let ans = two()+one();
//     console.log(ans);

// }

// three();


// function savetoDb(data,sucess, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed >4){
//        sucess();

//     }
//     else{
//         failure();
//         }

// }


// savetoDb(
//     "kumar",
//     ()=>{
//         console.log("success:you data was saved");
//     },
//     ()=>{
//         console.log("failure: you data was not saved!");
//     }
// )











function savetoDb(data){
    
    return new Promise((reslove,reject)=>{

        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            reslove("was success");
        }
        else{
            reject("was failed!");
        }
    });


}


savetoDb("kuamr")
.then(()=>{
    console.log("promise was resloved")
})
.catch(()=>{
    console.log("promise was rejected!")
});
