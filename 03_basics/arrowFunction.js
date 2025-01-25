const user = {
    username: "tanu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
user.username = "tanuja"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "sandeep"
//     console.log(this.username);
    
// }
// chai()

// const chai = function() {
//     let username = "deep"
//     console.log(this.username);
    
// }


// const chai = () => {
//     let username = "deep"
//     console.log(this.username);
    
// }

// chai()


//proper arrow function definition

// const addTwo = (num1, num2) => {     // basic arrow function
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "deepti" })   //jb object return krna ho

console.log(addTwo(1,2))