// function calculateCartPrice(...num1){
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(19, 10, 34));

const user = {
    username: "tanuja",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 499
})

const myNewArray = [200, 300, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

