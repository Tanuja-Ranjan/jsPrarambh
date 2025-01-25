
function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("J");
    console.log("A");  
}

// sayMyName()

// function addTwoNumbers(number1, number2) //parameter 
// {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) //parameter 
{
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 4) //argument

// console.log("Result: ", result);


function loginUserMessage(username){
    // if(username === undefined){
        if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("joli"))
console.log(loginUserMessage());
