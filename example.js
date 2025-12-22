
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

