const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixedArray = ['anarchy', 99, true]

const makeUpperCase = (arr) => new Promise((result, error) => {
  result (arr.map(function (x){
      if(typeof x === 'string' || x instanceof String){
        return x.toUpperCase()
      }
  error("Error: Not all items in the array are strings!");
    }));  
});
const sortWords = (arr) => new Promise((result, error)=>{
    result(arr.sort())
    error("Error: Not all items in the array are strings!")
})

makeUpperCase(arrayOfNames)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeUpperCase(mixedArray)
.then(sortWords)
.then((result)=> console.log(result))
.catch(error => console.log(error))

// ['CLAY', 'JAXX', 'TINY']
// Error: Not all items in the array are strings!