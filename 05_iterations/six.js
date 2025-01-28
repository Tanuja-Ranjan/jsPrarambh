
const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    return item;
    
})

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   //filter v callback leta hai
// myNums.filter(() => {
// })



// const newNums = myNums.filter( (num) => num > 5 )
// console.log(newNums);



// const newNums = myNums.filter((num) => {
//     return num>5
// })

// console.log(newNums);



// const newNums = []
// myNums.forEach( () => {
//     if(num > 5){
//         newNums.push(num)
//     }
// } )


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userBooks = books.filter(  (bk) => bk.genre === 'History');

  userBooks = books.filter( (bk) => bk.publish > 2000);
  userBooks = books.filter( (bk) => bk.publish > 1995 && bk.genre === 'History');

//   console.log(userBooks);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const finalNums = myNumbers.map( (num) => num + 10)            //filter, map similar
// console.log(finalNums);

  const finalByForEach= myNumbers.forEach((num) => {  //ye wala nh chl rha
    // console.log(num + 10);
})


const newNums = myNumbers
             .map( (num) => num * 10 )
             .map ((num) => num + 1)
             .filter((num) => num >= 40)
//   console.log(newNums);
  

//   const myNos = [1, 2, 3]
//    myTotal = myNos.reduce(function (acc, currval) {
//             console.log(`acc: ${acc} ${currval}`);
            
//             return acc + currval
//    } , 0)


// const myNos = [1, 2, 3]
// myTotal = myNos.reduce( (acc, currval) =>  {
//          console.log(`acc: ${acc} ${currval}`);
//          return acc + currval
// } , 0)


const myNos = [1, 2, 3]
myTotal = myNos.reduce( (acc, currval) =>   acc + currval , 0)
// console.log(myTotal);


const shoppingcart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
  
 const priceToPay = shoppingcart.reduce((acc, item) => acc + item.price,0)
