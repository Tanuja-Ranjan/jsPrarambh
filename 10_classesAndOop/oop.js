const user = {
    username: "Tanuja",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
            
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    // username = username             //1st wla var hai 2nd wala parameter
    // myUsername = username
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    // return this

    // return nh likhe to bhi chlega kyuki ye implicitly return hota hai
}

const userOne = new User("Dhela", 12, true)
const userTwo = new User("Megha", 11, false)

console.log(userOne.constructor);
console.log(userTwo);

/*
 1. new keyword use krne se empty object generate hota hai...
 2. constructor function call hota hai new keyword ke karan...
 3. ye jitne v argument hai function ke andar unhe call krta hai or de deta hai
 4. mil jata hai fn ke andar

*/

// study about method instance of