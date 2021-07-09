//Arguments Object
// function sum()
// {
//     let total = 0;
//     for(let k of arguments)
//         total+=k;
//         return total;
// }

// console.log(sum(1,2,3,4,6));


//Rest Operator
// function sum2(...args){
 
//     return args.reduce((a,b) => a+b );

// }

// console.log(sum2(1,2,3,4,5,6));

// let number = 3;
// console.log(`hi there man whats up ${number}`);


//Getters and Setters
// const names = {
//     firstName : "John",
//     lastName : "Lock",

//     get fullName(){

//         return `${names.firstName} ${names.lastName}`;
//     },
//     set fullName(value){
//         const parts = value.split(' ');
//         console.log(parts);
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }

// };

// names.fullName = "John Smith";
// console.log(names.fullName);

//Try and Catch

//  let proper;
// const person = {
//     firstName : "Mosh",
//     lastName : "Hamedani",

//     get fullName()
//     {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     set fullName(value)
//     {    
//            if(typeof(value)!=="string")
//         throw new Error("Entered String is not Valid");

//         const parts = value.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try{

//     person.fullName = null;
// }
  
// catch(e)
// {
//     proper = prompt("value",e);
//     // console.log(proper);


// }
// console.log(person.fullName);

//this is not part of try catch section this is extra 
// finally{
//     person.fullName=proper;
//     console.log(person.fullName);
// }
// person.fullName = proper;

//var and let
// function checking(){
    
//     console.log("Hi");
//     for(var a=0;a<=15;a++)
//     {
//         console.log(a);
//     }
//    console.log(a);
// }
// checking();

//this keyword

// const objects = {
//     firstName : "Jack",
//     lastName : "Black",
//     play()
//     {
//      console.log(this);
//     }
// }

// objects.play();

// function Thiskeyword (value){

//      this.value = value;
//      console.log(this);
// }

// const v = new Thiskeyword("Hi There");

// console.log(v);

// const video = {
//     title : "a",
//     tags : ["a","b","c"],
//     showvideo () {
//         this.tags.forEach(function(tag)
//         {
//             console.log(this.title,tag);
//         },this);
//     }
// };

// video.showvideo();

// const newvideo = {

//     title : "a",
//     tags : ["a","b","c"],
//     showtags(){
//         this.tags.forEach(tag => {
//             console.log(this.title,tag);
//         })
//     }
// };

// newvideo.showtags();

//Excercise 1

// function sum(...arg)
// {
//     return arg.reduce((a,b) => a+b)
// }

// console.log(sum(1,2,3,4,5,6));

// console.log(sum([1,2,3,4,5,7,8]));

// function sum(...items){
//     if(items.length==1 && Array.isArray(items[0]))
//     items=[...items[0]];
//     return items.reduce((a,b) => a+b);

// }

//Exercise 2

// let circle = {
//     radius : 2,
//     get area (){
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);



// const ar = [1,2,3,4,5];
// const el=8;

// function araa(ar)
// {
//     if(!Array.isArray(ar))
//     throw new Error("Entered array is not valid");

//     for(let k in ar)
//     {
//         if(ar[k]===el)
//         return true;
//         else
//         return false;
//     }
// }
// try{
// console.log(araa(null,el));
// }

// catch(e)
// {
//     console.log(e.message);
// }