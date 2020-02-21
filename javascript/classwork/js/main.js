// console.log("last task")









// function calc(firstNumber, secondNumber, operation) {
//     firstNumber = parseInt(prompt("Enter the first number", "1"));
//     secondNumber = parseInt(prompt("Enter the second number", "1"));
//     operation = prompt("enter the operation");
//     switch (operation) {
//         case "+":
//             console.log(firstNumber + operation + secondNumber + "=" + (firstNumber + secondNumber));
//             break;
//         case "-":
//             console.log(firstNumber + operation + secondNumber + "=" + (firstNumber - secondNumber));
//             break;
//         case "*":
//             console.log(firstNumber + operation + secondNumber + "=" + (firstNumber * secondNumber));
//             break;
//         case "/":
//             console.log(firstNumber + operation + secondNumber + "=" + (firstNumber / secondNumber));
//             break;
//         default:
//             console.log("wrong selection")
//     }
// }

// calc()



// function user (name, age) {
//     if (name=== undefined || age===undefined){
//     console.error("params are wrong", name, age)
//     throw new TypeError ("smethin goes wrong")
    
// }
// age = parseInt(age);
// return `USER : name - ${name}; age - ${age}`
// }
// console.log(user(NaN, NaN));



//task 1
// let a = parseInt( prompt("bir reqem daxil edin"));
// let b = parseInt(prompt("bir reqem yene daxil edin"));

// function sum(a,b) {
//     console.log(`${a+b}`)
// }
// sum(a,b);


//task 2
// let a = parseInt( prompt("bir reqem daxil edin"));
// let b = parseInt(prompt("bir reqem yene daxil edin"));

// function meke(a,b){
//     if(a>b){
//         console.log("ikinci reqem birinciden boyuk olmalidir")
//     }
//     for(a ; a<=b ; a++ ) 
//         console.log(a);
    

// }

// meke(a,b);


//task 3

// function meke(){
//     for (let val of arguments){
//         console.log(val);
//     }
// };
// meke([],{},"meke",45)

// function meke(){
//     let sum = 0;
//     for(let arg of arguments){
//         sum+=arg;
//     }
//     return sum;
// }
// console.log(meke(45,45,85,899));


//task 4

// function checkMeke(){
//     if(arguments.length===3){
//         for(let a of arguments){
//             if(typeof a !== "number" ||){
//                 throw new TypeError ("duz yaz eee")
//             }
//         }
        
//     }else{
//         console.log(`3 olmalidi uzunluq.sende ${arguments.length}`)
//     }
// }
// checkMeke(45,65,98)

// task 5 
// function printMagicRange(start, end , magicNumber){
//     for(let i = start; i< end ; i++){
//         if( 3 % magicNumber===0){
//             console.log(i)
//         }
//     }
// }

// function intValidate(toValidate){
// return typeof toValidate === "number" && toValidate === parseInt(toValidate);
// }



//task 6
// const SIZE_SMALL = {
//     name: 'SIZE_SMALL',
//     price: 15,
//     cal: 250
//   };
  
//   const SIZE_LARGE = {
//     name: 'SIZE_LARGE',
//     price: 25,
//     cal: 340
//   };
  
//   const STUFFING_CHEASE = {
//     name: 'STUFFING_CHEASE',
//     price: 4,
//     cal: 25
//   };
  
//   const STUFFING_SALAD = {
//     name: 'STUFFING_SALAD',
//     price: 5,
//     cal: 5
//   };
// function GetPrice( size , stuffing){
//     let price = 0;
//     if (size===SIZE_LARGE.name){
//         price+=SIZE_LARGE.price;
//     }
// }  

// switch(size){
//     case SIZE_LARGE.name:
//         price+=SIZE_SMALL.price;
//         break;
// }

//objects////////
// const meke = {
//     name: "meke",
//     age: 55

// }
// console.log(meke);
// const Notmeke = meke;
// Notmeke.age = 45;
// console.log(Notmeke);


//task 1

// function CreateUser (userName , Userage){
//     return{
//         name: userName,
//         age: Userage
//     }
// }
// CreateUser("meke" , 43)



//task2
// function CreateUser (userName , Userage){
//     return{
//         name: userName,
//         age: Userage,
//         increaseAge: function (){
//            return ++this.age
        
// //         }
// //     }
// // }
// // const user = CreateUser("meke", 55)
// // user.increaseAge();
// // user.increaseAge();

// // console.log(user)


// //task3

// // function CreateUser (userName , Userage){
// //     return{
// //         name: userName,
// //         age: Userage,
// //         increaseAge: function (){
// //            return ++this.age
// //         },
// //         addField: function (fieldName, fieldValue) {
// //             this[fieldName] = fieldValue;
// //         }
// //     }
// // }
// // const user = CreateUser("meke", 33);


// // user.addField("pet","alabash")

// // console.log(user);

// //task 4

// // function User(name, age) {
// //     if(arguments.length<2) throw new SyntaxError("no arguments");

// //     this.name = name;
// //     this.age = age;

// //     this.increaseAge = function (){
// //         return ++this.age;
// //     }
// //   }
// //   this.addField = function (fieldName , fieldValue){
// //       this[fieldName] = fieldValue;  }
// // //not complated check in home
// //  console.log( new User ("meke", 44));
  

//  //task5
//  const constantValues = {
//     SIZE_SMALL: {
//       price: 15,
//       cal: 250,
//     },
  
//     SIZE_LARGE: {
//       price: 25,
//       cal: 340,
//     },
  
//     STUFFING_CHEASE: {
//       price: 4,
//       cal: 25,
//     },
  
//     STUFFING_SALAD: {
//       price: 5,
//       cal: 5,
//     },
  
//     STUFFING_BEEF: {
//       price: 10,
//       cal: 50,
//     },
//   };

//   function Burger(burgerSize, burgerStuffing){
//     this.size=burgerSize;
//     this.stuffing=burgerStuffing;

//     this.getPrice = function (){
//         this.price = this.size.price + this.stuffing.price;
    
//     constantValues().cal = this.cal;

//     }

    
//     }

//   const burger = new Burger("SIZE_LARGE", "STUFFING_MAYO");
//   console.log(burger)
  
  
//------------------------------------------------


//TASK 1

// function customCharAt(originStr , index){
//  return originStr[index]
// //  return originStr.chartAt(index)
// }


// console.log(customCharAt("helellele mekecin",0));

/* TASK 2
* Ask a string from the user and turn all of the odd characters of this string in to UPPERCASE
*/

// function oddUpperCase(origin){
//   // return origin.toUpperCase();
//   let res = "";
//   let isOdd = false;
//   for (let i = 0; i < origin.length; i++) {
//     if (origin[i]===""){
//       res += origin[i];
//       i++;
//       continue;
//     }
//     if (i%2===0) {
//       res += origin[i];
//     }  else{
//       res += origin[i].toUpperCase();

//     }  
//   }
//   return res;
// }
// console.log(oddUpperCase("mekecin necesen hohohohoh"));


/* TASK 3
* Create a function cutMexLength(string, maxlength)
* You need to cun the exact number of characters(maxLength) from source string.
* Return value:
*       if the number of the characters in source string is bigger then maxLength - the string that has been cut
*       if the number of the characters in source string is smaller then maxLength - the source string itself
*/

// function cutMexLength(string , maxLength){
//   return string.length> maxLength?
//   string.substring(0,maxLength)+"..."
//   :string
// }


/* TASK 4
* Create a function getDayAgo(numberOfDays)
* Its needs to return a name of the weekday, that was numberOfDays days before.
*/
// const days=[
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// function getDayAgo(numberOfDays){
//   const now = new Date();
//   const todayDate = now.getDate();
//   now.set
// }



/*TASK 5
* Create a function that takes string with date 'DD/MM/YYYY' as an argument.
* Return value: number of weekday of the first day if this month
* Create the same function for getting the number of the last weekday of the month
* */


// const days=[
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// function getFirstDayName(dateStr){
//   const d = dateStr.split("/");
//   const date = new Date( `${d[2]}/${d[1]}/${d[0]}`)
//   date.setDate(1);
//   return days[date.getDay()];

// }



// console.log(getFirstDayName("15/02/2020"))


/* TASK 5
* You have an object of a storage
* Create a method getAmount(goodsList), that takes a string with the list of goods.
* Return value: a modified string, that has next format for each good - 'goodName: amountOfThisGoodInStorage'
*
* In case if there is no good with this name in storage, place 'not found' instead of amount.
*
* Your program doesn't need to be case sensitive.
* It means that the 'pIneAPple' needs to be the same as 'pineapple'
*
* 	ADVANCED COMPLEXITY:
*           add the grouping by categories to the storage with any representation.
*           add 2-3 categories of goods with 4-5 goond in each category
*           add the third argument in the function. If it exists - search in particular category, if there is no third argument - search everywhere
*/



// const Storage = {
//   apple: 8,
//   beef: 162,
//   banana: 14,
//   chocolate: 0,
//   milk: 2,
//   water: 16,
//   coffee: 0,
//   blackTea: 13,
//   cheese: 0,

//   getAmount: function(goodList){
//     const spliteGoods = goodList.trim().split(",");
//     let result = "";
//     for (let item of spliteGoods) {
//       item=this.findAmount(item);
      
//     }
//     return result;
//   },
//   findAmount(item){
//     if (this[item] !== undefined && this[item]!== null){
//       return `${item}: ${item}`
//     }else 
//     return `${item}: NOT FOUND`
//   }
// };


/* Rewrite first three tasks from the previous lesson, using arrow functions*/
// const customCharAt = (str , ind) => str[ind];
// console.log("customCharAt - ", customCharAt("gogi wants to go home", 11));
// const changeTheString = (origin,)

/* TASK - 1
* Create arrow sum() function.
* Arguments: two integer numbers
* Return value: sum of two arguments
* */




/* TASK - 2
* Write a functions, that will be counting from start to end of range.
* Arguments: start of the range, and of the range
*/
// const RangeCount = (start, end)=>{
//  for (let index = 0; index < end; index++) {
//    console.log(index);
   
//  }
// console.log("done")
// };

// RangeCount(45,80);


/* TASK - 3
* Write a function, that will sum up all the arguments passed into it.
* */

// const SumAll = ( ...nums) => {
//   let sum = 0;
//    for (let n of nums) {
//        sum+=n;   
//  }
//  return sum;
 
// };
// console.log(45,45,10)

/* TASK - 4
* Create a function, showMessage(msgText, numberOfShowing)
* Arguments: msg text - is a text of message that will be shown,
* numberOfShowing - the number of times that the message will be shown
* Example: showMessage('Hello', 18) -> will show 'Hello' for the user 18 times
* */

// const showMessage=(msgText, numberOfShowing)=>{
//   for(let i = 0 ; i< count ; i++){
//   setTimeout(()=>console.log(msgText))

//   }
// }




/* TASK - 6
* Rewrite calculator() function, into the constructor function, with a new features:*/
function calc(firstNumber, secondNumber, operation) {
    firstNumber = parseInt(prompt("Enter the first number", "1"));
    secondNumber = parseInt(prompt("Enter the second number", "1"));
    operation = prompt("enter the operation");
    switch (operation) {
        case "+":
            console.log(firstNumber + operation + secondNumber + "=" + (firstNumber + secondNumber));
            break;
        case "-":
            console.log(firstNumber + operation + secondNumber + "=" + (firstNumber - secondNumber));
            break;
        case "*":
            console.log(firstNumber + operation + secondNumber + "=" + (firstNumber * secondNumber));
            break;
        case "/":
            console.log(firstNumber + operation + secondNumber + "=" + (firstNumber / secondNumber));
            break;
        default:
            console.log("wrong selection")
    }
}

calc()

/* Each operation has its own arrow methods.
* That means - we will have sum(a,b) for summing, multiple(a,b) for multiplying and so on.
* Each of this methods need only two arguments,
* and returns only the result of the operation with this two numbers
* If the method hasn't receive any of two arguments, assign 0 as a default value.
*
* The calculate() method will be the main one.
* It takes three arguments:
*   1 - integer number
*   2 - integer number
*   3 - the function needs to be used for this two numbers
* So we have a picture like this:
* the main function inside itself will call the function with the operation.
* This construction is useful, if we need to do some operations with numbers before calculating
*
* Example:
*   const myCalc = new Calculator();
*   myCalc(6, 12, myCalc.sum);
*   myCalc(6, 12, (a,b) => myCalc.sum(a%b + 1, b%a + 1));
* */



//--------------CLASSWORK NEW TEACHER INCLUDED----------


// let arr = ["Jazz","Blues"];
// arr.push("Rock-n-Roll");
// arr[Math.round(arr.length/ 2) - 1] = "Classics";
// console.log(arr);
// arr.shift();
// arr.unshift("Rap","Ragga");
// console.log(arr);



// let isContune= true;
// const inputs =[];
// let total = 0;
// while (isContune){
//     const input = prompt("Say Number");
//     const IsValid = (input !="" && input != null && !isNaN(+input));
//     if(IsValid){
//         inputs.push(+input);
//     }
//     else{
//         isContune=false;
//     }
// }
