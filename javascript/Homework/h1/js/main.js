"use strict";



let name = prompt("Enter your name");
let age = parseInt(prompt("Enter your age"));

while(isNaN(age)){
    alert("please write your age")
    age = parseInt(prompt("Enter your age"));
}

while (age<18){
    alert("You are not allowed to visit this website")
    age = parseInt(prompt("Enter your age"));
    
}

if(18<=age<=22){
    var txt;
    var confirm =confirm("Are you sure you want to continue?")
    if (confirm == true) {
        txt = alert("Welcome,"  + name);
      } else {
        txt = alert("You are not allowed to visit this website");
         
      }
}


