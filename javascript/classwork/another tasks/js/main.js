//Task1

document.querySelector("div");
console.dir("div");
document.getElementsByTagName("div")
console.dir("div");
document.getElementsByClassName("meke");
console.dir("meke");
document.getElementById("meke");
console.dir("meke")


//task 2

function inner() {
    
    const gogi = document.getElementsByClassName("traning-list")[0]
    console.log(gogi);
    
    gogi.innerHTML="<p>Hello</p>";

}
inner();


//task3

function remove(){
    document.getElementById("remove").innerHTML="<p></p>"
    
        if(innerHTML="")
            document.querySelector("#remove").style.text-transform = "uppercase";
        
    
}


