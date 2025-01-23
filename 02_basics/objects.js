//singleton  => jb kisi constructor se bnate hai object
//  toh singleton se bnta hai

//object.create


//object literals

const mySym = Symbol("key1")


const JsUser = {
    name : "Tanuja",
    "fullName" : "Tanuja Ranjan",
    [mySym] : "mykey1",
    age : 12,
    location : "Hajipur",
    email : "ranjan@123",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log( JsUser[mySym]);

JsUser.email = "shambhu@34.com"
console.log(JsUser.email);

// Object.freeze(JsUser)
JsUser.email = "toni@54.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User ,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

