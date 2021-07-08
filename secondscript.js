
// let number = {
//      firstName:'Mon',
//      lastName: 'Dove'
// };

// function school (studName,studRollNo)
// {
// //     console.log(studName + " " + studRollNo);
// // }

// // school("Ricky",24);

// let result = 10/0;
// console.log(result);

// let firstNumber = 10;
// let secondNumber = 2;

// let exponentialValue = firstNumber**secondNumber;
// console.log(exponentialValue);

// let role = "Guest";

// if(role === "Guest")
// console.log("Guest User");
// else
// console.log("Unknown User");

// let role = "Admin";

// switch(role)
// {
//     case "Guest":
//         console.log("Guest User");
//         break;

//     case "admin":
//         console.log("Administrator");
//         break;
    
//     default:
//         console.log("Unknown User");
// }

// let person = {
//     firstName:"John",
//     lastName:"Dove"
// };

// for(let a in person)
// {
//     console.log(a,person[a]);
// }

// let arr = ["red","blue","green"];

// for(let a of arr)
// {
//     console.log(a);
// }

// function largest(number1,number2)
// {
//     if(number1 > number2)
//     console.log(number1);
//     else
//     console.log(number2);
// }

// largest(34,98);

// function isLandscape(width,length)
// {
//     if(width<length)
//     return true;
//     else
//     false;
// }

// if(isLandscape(30,40)===true)
// console.log("It is a Landscape");
// else
// console.log("It is not a Landscape");

// function fbz(number)
// {
  
//     // if(typeof number !=='number')
//     // return "Not a number";
//     if(number % 3 === 0 && number % 5 === 0)  
//     return "FizzBuzz";
//     if(number%5===0)
//     return "Buzz";
//     if(number%3===0)
//     return "Fizz"; 
//     if(number%3!==0 || number%5!==0)
//     return number;
// }
// console.log(0%3===0);
// console.log(fbz(false));

// const movie = {

//     title:'a',
//     year:2018,
//     director:'b',
//     duration:120
// };

// showproperties(movie);

// function showproperties(content){

// for(let k in content)
// {
//  if(typeof content[k] === 'string')
//  console.log(content[k]);

// }

// }

// function sum(limit)
// {
// let isum=0;
// let i=1;
// for(i;i<=limit;i++)
// {
//     if(i%3===0)
//     isum+=i;
//     if(i%5===0)
//     isum+=i;
// }
// return isum;
// }

// console.log(sum(10));

// function school(name,rno,cl){

//     this.name=name;
//     this.rno=rno;
//     this.cl=cl;
// }

// const obj = new school("Rohan",43,"X-B");
// console.log(obj.name + "\n" + obj.rno + "\n" + obj.cl);

// function school(name,rno,cl)
// {
// return {
//  name,rno,cl,
//  show()
//  {
//      console.log("Hi There")
//  }

// };
// }

// const obj1=school("Rohan",234,"X-B");
// console.log(obj1);

// const circle = {
//     radius:1,
//     draw: function (){
//         console.log("draw");
//     }
// };

// const another = {
//     diameter:1,
//     volume:45
// };

// // Object.assign(another,circle);

// console.log(another);

// const zero = {...circle};

// console.log(zero);

// const addr = {
//     street:"21",
//     city:"New Delhi",
//     zipcode:110062

// };

// showaddress(addr)
// function showaddress(addr)
// {

//     console.log(addr.street + "\n" + addr.city + "\n" + addr.zipcode);
// }

//Factory function
// function createAddress(street,city,zipcode)
// {
//     return {
//         street,
//         city,
//         zipcode
//     };
// }

// const address = createAddress("a","b","c");
// console.log(address);

//Constructor Function
// function Create(street,city,zipcode)
// {
//     this.street=street;
//     this.city=city;
//     this.zipcode=zipcode;
// }

// const add = new Create("a","b","c");
// const add2= new Create("a","b","c");

// function areEqual(add,add2){

//     for(let k1 in add,add2){
        
//         console.log(add2[k1]);
//         if(add[k1]===add2[k1])
//         {
//             return true;
//         }
//     }
//     }
// console.log(areEqual(add,add2));

// let blog = {
 
//     author:"a",
//     title:"b",
//     views:15,
//     comments: [
//         {
//             author:"ab",body:"bc"
//         },
//         {
//             author:"de",body:"fg"
//         }
//     ]

// };

// console.log(blog);

// function Blog(publishdate,costperbook,publishingoffice){
 
//   this.publishdate=publishdate;
//   this.publishingoffice=publishingoffice;
//   this.costperbook=costperbook;
// }

// blog = new Blog("12-12-21",40,"New delhi");
// console.log(blog);

// let priceobj = [
    
//     inexpensive= {
//         cost:">400",
//         delivery_time:">45min",
//         temp:"25C"   
//     },
//     moderate= {
//         cost:">600",
//         delivery_time:">30min",
//         temp:"35C" 
//     },
//     expensive= {
//         cost:">800",
//         delivery_time:">10min",
//         temp:"45C" 
//     }
// ]
// console.log(priceobj);

// const arr = [1,2,3];

// arr.push(5,6);
// console.log(arr);

// arr.unshift(-1,0);
// console.log(arr);

// arr.splice(3,0,4,4.1,4.2);
// console.log(arr);

// console.log(arr.indexOf(4.1));
// console.log(arr.includes(4.2));

// const courses = [
//     {
//         id:"a",
//         value : 1
//     },
//     {
//         id:"b",
//         value : 2
//     }
// ];

// const course = courses.find (course => course.id === "a");

// console.log(course);

// const courses = [1,2,3,4,5];

// courses.pop();
// console.log(courses);

// courses.shift();
// console.log(courses);

// courses.splice(1,2);
// console.log(courses);

// const course = [1,2,3,4,5];

// course.length=0;
// console.log(course);

// const first = [1,2,3,4];
// const second = [5,6,7,8];

// const combined = first.concat(second);
// console.log(combined);

// const newarray = combined.slice(1,4);

// console.log(newarray);
// console.log(combined);

// const array = [1,2,3,4,5,6];

// array.forEach(number => console.log(number));

// const array = [
//     {
//         id:1,name:"Zode.js"
//     },
//     {
//         id:2,name:"Javascript"
//     }
// ];

// array.sort( function (a,b)
// {
// if(a.name>b.name)
// return 1;
// if(a.name<b.name)
// return -1;
// else
// return 0;

// });

// console.log(array);

// const array = [1,4,2,9,7,6,7,0,-1];

// console.log(array.sort());

//Showing if name contains even or odd no of Alphabets

// const array = [1,2,3,-1,5,-9,-8,0,11];

// const newarray = array.filter(n => n>=0);
// console.log(newarray);

// const sum=0;
// function arrayfromrange(min,max)
// {
//   const newarr = []
//   for(let i=min;i<=max;i++)
//   {
//      newarr.push(i);
      
//   }
//   return newarr;
// }

// const numbers = arrayfromrange(-10,4);
// console.log(numbers);

// function includescheck(arr,searchElement)
// {

//      for(let k of arr)
//      {
//          if(arr[k]===searchElement)
//          return true;
//          else
//          return false;
//      }
// }

// const arr = [1,2,3,4,5,6,7,89];
// const result = includescheck(arr,-9);
// console.log(result);
