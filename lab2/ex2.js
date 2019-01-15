const capitalize = str =>{
    //The traditional way
    // str1 = str.toLowerCase();
    // return str1.charAt(0).toUpperCase()+ str1.slice(1); 
    const string = [...str.toLowerCase()]
    string[0] = string[0].toUpperCase()
    return string.join("")          
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));