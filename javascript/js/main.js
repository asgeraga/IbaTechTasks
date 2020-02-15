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
        
//         }
//     }
// }
// const user = CreateUser("meke", 55)
// user.increaseAge();
// user.increaseAge();

// console.log(user)


//task3

// function CreateUser (userName , Userage){
//     return{
//         name: userName,
//         age: Userage,
//         increaseAge: function (){
//            return ++this.age
//         },
//         addField: function (fieldName, fieldValue) {
//             this[fieldName] = fieldValue;
//         }
//     }
// }
// const user = CreateUser("meke", 33);


// user.addField("pet","alabash")

// console.log(user);

//task 4

function User(name, age) {
    if(arguments.length<2) throw new SyntaxError("no arguments");

    this.name = name;
    this.age = age;

    this.increaseAge = function (){
        return ++this.age;
    }
  }
  this.addField = function (fieldName , fieldValue){
      this[fieldName] = fieldValue;  }
//not complated check in home
 console.log( new User ("meke", 44));
  

 //task5
 const constantValues = {
    SIZE_SMALL: {
      price: 15,
      cal: 250,
    },
  
    SIZE_LARGE: {
      price: 25,
      cal: 340,
    },
  
    STUFFING_CHEASE: {
      price: 4,
      cal: 25,
    },
  
    STUFFING_SALAD: {
      price: 5,
      cal: 5,
    },
  
    STUFFING_BEEF: {
      price: 10,
      cal: 50,
    },
  };

  
  


  



