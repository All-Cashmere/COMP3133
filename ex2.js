function max(x,y,z){
    maxNum = 0;
    if(x > y){
        maxNum = x;
    }
    else if (y > x){
        maxNum = y;
    }
    else if(z > maxNum){
        maxNum = z;
    }
    return maxNum;    
}

console.log(max(21,4,3));
