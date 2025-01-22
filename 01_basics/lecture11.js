const name = "Tanuja"
const repoCount = 3

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Tanu-jaRan-jan')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('u'));
const newString = gameName.substring(-8,4);  // 8 excluded : substring me -ve value nhi de skte
// console.log(newString);

const anotherString = gameName.slice(-8,4)   //isme de skte hai
// console.log(anotherString);

const STRING = "      tanuja      "
console.log(STRING.trim());

const url = "https://tanuja.com/tanuja%20ranjan"
console.log(url.replace('%20','-'))

console.log(url.includes('nuja'));

console.log(gameName.split('-'));