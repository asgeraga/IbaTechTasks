console.log("last task")









function calc(firstNumber,secondNumber,operation){
    firstNumber = parseInt(prompt("Enter the first number", "1"));
    secondNumber = parseInt(prompt("Enter the second number", "1"));
    operation = prompt("enter the operation");
    switch (operation) {
        case"+":
            console.log(firstNumber + operation + secondNumber + "=" + (firstNumber + secondNumber));
            break;
        case"-":
            console.log(firstNumber + operation + secondNumber + "=" + (firstNumber - secondNumber));
            break;
        case"*":
            console.log(firstNumber + operation + secondNumber + "=" + (firstNumber * secondNumber));
            break;
        case"/":
            console.log(firstNumber + operation + secondNumber + "=" + (firstNumber / secondNumber));
            break;
        default:
            console.log("wrong selection")
    }
}

calc()




