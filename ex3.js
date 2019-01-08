function right(str){
    firstchars = str.slice(0,-3);
    last3chars = str.slice(-3); //hon

    string = last3chars+firstchars;
    return string;



}

console.log(right("python"));
