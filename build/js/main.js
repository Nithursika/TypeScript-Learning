"use strict";
// let username = 'Nithu'
// console.log(username)
// let a: number = 12
// let b: number = 6                 //   boolean,string,any
// console.log(a / b)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const sum = (a: number, b: number) => {
//     return a + b
// }
// console.log(sum(10, 11))
// let postId: number | string;  //union type
// let re: RegExp = /\w+/g
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// Arrays ////////
let stringArr = ["aa", "bb", "cc", "ss"];
let unionTypeArr = [1, "aa"]; //let unionTypeArr: (string | number)[]=
let mixData = [1, "aa", true];
unionTypeArr[0] = "aaaaa";
unionTypeArr.push(234);
unionTypeArr.unshift("www");
console.log(unionTypeArr);
/////// Tuples ////////
let myTuple = ['Dave', 24, true];
mixData = myTuple;
// myTuple = mixData   //cannot assign 
////// object ///////
let myobj;
myobj = [];
console.log(typeof myobj);
const exampleObj = {
    prop1: "Nithu",
    prop2: 24,
};
let evh = {
    name: "nithu",
    active: true,
    album: ['aa', 12]
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(evh));
/////// Enums ///////
// "Unlike  most Typescript features, enums are not a type-level addition to javascript but something added to the languge and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); //0
console.log(Grade.A); //4
