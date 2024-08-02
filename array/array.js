// const arr=[0,1,2,3,4,5];
// const name=["jbmr"]
// console.log(arr[0]);

// // Array Method

// arr.push(6);
// arr.push(7);
// arr.pop();
// arr.unshift(7);
// arr.shift();

// console.log(arr);
// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// slice,splice
// const arr=[0,1,2,3,4,5,6,7,8,9];

// const arr1=arr.slice(2,4);
// const arr2=arr.splice(2,4);
// console.log(arr1);
// console.log(arr2);

// const name=["vishnu","jbmr","gurjar"];
// const city=["gwalior","morena","bhopal"];

// name.push(city);
//  console.log(name);
// console.log(name[3][3]);
// const newdata=name.concat(city);
// console.log(newdata);


// **********spread operator******* 

// const name=["vishnu","jbmr","gurjar"];
// const city=["gwalior","morena","bhopal",1,3,4,5];
// const name1=["vishnu","jbmr","gurjar"];
// const city1=["gwalior","morena","bhopal"];
// const alldata= [...name,...city,...city1,...name1];
// console.log(alldata);


// ********************flat**************
// const data=[1,2,3,4,5,6,7,[4,5,5,6,7,[6,7]]];
// console.log(data);
// const newdata=data.flat(Infinity);
// console.log(newdata);

console.log(Array.isArray("jbmr"));

console.log(Array.from("jbmr"));
console.log(Array.from( {name: "jbmr"}));
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
