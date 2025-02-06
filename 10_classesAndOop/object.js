function mulBy5 (num){
    return num*5
}

mulBy5.power = 2

console.log(mulBy5(5));
console.log(mulBy5.power);
console.log(mulBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()
