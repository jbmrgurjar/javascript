// function myname() {
//     console.log("j");
//     console.log("b");
//     console.log("m");
//     console.log("r");
// }

// myname();

// function addtwo(a,b){
// console.log(a+b);

// }
// addtwo(2,4);


// function login(user="jb"){
//     if(!user){
// console.log("please enter a user name");
// return
    
    
//     }
//     return `${user} just logged in`
// }
// console.log(login("jbmr"));


// function calculatecartPrice(...num){
//     return num;

// }
// console.log(calculatecartPrice(200,400,500));


// const mynewArray=[10,20,30,40];
// function returnArray(getArray){
// return getArray[1];
// }
// console.log(returnArray(mynewArray));



// **********************scopes**********************
// let a=10;
// const b=20;
// var c=30;
// console.log(a);
// console.log(b);
// console.log(c);


// var c=300;
// if(true){
//     let a=10;  // block scope
//     const b=20;
//     var c=30;
// }
            //    globle scope
// console.log(a);
// console.log(b);
//  console.log(c);

// function one(){
//     const username="jbmr"
//     function two(){
//         const web="insta"
//         console.log(username);
        
        
//     }
//     // console.log(web);
//     two();
    
// }
// one();


if(true){
    const name="jbmr";
    if(name=="jbmr"){
        const web="insta";
        // console.log(name +"  "+ web);
        
    }
    // console.log(web);
    
}
// console.log(name);


// ****************************intersting**********************

// console.log(addone(4));
// function addone(val){
//     return val+1;

// }
// // console.log(addone(4));
// console.log(addtwo(4));

// const addtwo=function(val){
    // return val+2
// }
// addtwo(3)

// **********************arrowFunction*****************


//  const t= ()=>{
//     let name="jbmr"
//     console.log(this.name);
// }
// t();

//  const adtwo=(val,val1)=>{
// return val+ val1;

// }
// console.log(adtwo(3,5));

