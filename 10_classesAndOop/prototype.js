let myName = "Tanuja        "
// console.log(myName.length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.tanuja = function(){
    console.log(`Tanuja is present in all Objects`);
    
}

Array.prototype.heyTanuja = function(){
    console.log(`Tanuja says Hello`);
    
}
// heroPower.tanuja()
// myHeros.tanuja()
// myHeros.heyTanuja()
// heroPower.heyTanuja()


//Inheritance

const user = {
    name: "Chai",
    email: "chai@12345"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


//Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "chai aur code          "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
       
}

anotherUserName.trueLength()

"hitesh".trueLength()
"pola".trueLength()