const separateConsecutiveAscending=(str)=>{
    let result = "";
    let previous=0;
    for(let i of str){
        if(parseInt(i)-previous===1){
            result+=i
        }
        else{
            result+=" "+i
        }
        previous=parseInt(i);
    }
    return result;
}

console.log(separateConsecutiveAscending('135689'))