let ulam_set = [] //this to be a list of ulam_rectangles

function populate_ulam(size){
    for(let i = 0; i < size; i++){
        ulam_set[i] = new UlamRectangle(0,0, i);
    }
}

function determine_prime(input){
    if(input === 1) {
        return false;    //the number 1 is not prime
    }
    if(input === 2){
        return true;     //the number 2 is prime
    }
    let start = 2;
    while(start < input){
        if(input % start === 0){
            return false;
        }
        start++;
    }
    return true;
}

