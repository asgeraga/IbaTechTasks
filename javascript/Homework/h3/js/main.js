




function createNewUser(name, surname){
    let user={
        firstname: name,
        lastname: surname,
        getLogin(){
            return this.firstname.toLowerCase()[0] + this.lastname.toLowerCase();
        }
    };
    return user;

}
let name =prompt();
let surname =prompt();


let newUser = createNewUser(name,surname);
console.log(newUser.getLogin());
