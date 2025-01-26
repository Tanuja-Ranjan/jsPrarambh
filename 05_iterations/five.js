const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (val) {
//     console.log(val);
    
// } )


// coding.forEach( (item) => {
//     console.log(item);
    
// })


function printMe(item){
    console.log(item);
    
}

// coding.forEach(printMe)  //yha pe reference dena hai , print nhi kr dena hai yahi pe printMe()

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})