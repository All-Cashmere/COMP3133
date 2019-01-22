const compareNumToTen = (int) => new Promise((result, error) => {
    if (int > 10){
        result(int + " is greater than 10, success!")
    }
    error(int + " is less than 10, error!")
    
});


compareNumToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error))

// 15 is greater than 10, success!
// 8 is less than 10, error!