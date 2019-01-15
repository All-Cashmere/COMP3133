const colors = ['red', 'green', 'blue']
const capitalizedColors = 
colors.map(str => str.charAt(0).toUpperCase()+str.slice(1));
console.log(capitalizedColors);