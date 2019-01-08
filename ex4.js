function angle_type(int){

    result = 0;

    if(int>0 && int<90 ){
        result = "Acute angle";
    }
    else if(int == 90){
        result = "Right angle";
    }
    else if(int>90 && int<180){
        result = "Obtuse angle";
    }
    else if(int == 180){
        result ="Straight angle";
    }
    return result;

}

console.log(angle_type(60));
