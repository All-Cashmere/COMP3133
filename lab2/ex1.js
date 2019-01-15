const greeter = (myArray) =>{
    let greetText = 'Hello ';

    for(const index of myArray){
        console.log(greetText + index)
    }

}
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);