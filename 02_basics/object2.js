// const tinderUser = new Object()  //singleton Object
const tinderUser = {}       //non singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Pili"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email: "tanuja@gmail.com",
    fullName: {
        userfullname:{
            firstname: "Tonu",
            lastname: "Chaudhary"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign(obj1, obj2, obj4)
/*
    isme kya hoga ki sari chije obj1 me jaengi...obj1 act as a source
    isme agr hm khali obj {} dete hai toh wo as a source kam krega aur sari chije usme hi jaengi
*/
// const obj3 = Object.assign({}, obj1, obj2, obj4)

//most used syntax using glass operators 
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

//jb v database se value aengi, we used thiis syntax
const users = [
    {
        id: 1,
        email: "somu@gmail.com"
    },
    {
        id: 1,
        email: "somu@gmail.com"
    },
    {
        id: 1,
        email: "somu@gmail.com"
    },
    {
        id: 1,
        email: "somu@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


