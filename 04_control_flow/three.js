const userEmail = []

if (userEmail) {
    console.log("Got userEmail");
    
} else {
    console.log("Don't have userEmail");
    
}

if (userEmail.length == 0) {
    console.log("Array is empty!");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20
// console.log(val1);


//Ternary Operator
// condition ? true : false
const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("greater than 80 ") : console.log("less than 80");



