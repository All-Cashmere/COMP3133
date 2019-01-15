var array = [1, 2, 3, 4]
const calculateSum = array.reduce((a, b) => a + b);
const calculateProduct = array.reduce((a, b) => a * b);

console.log(calculateSum); //10
console.log(calculateProduct); //24