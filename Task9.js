const moveCapitalToFront=(str)=>{
    let capital="";
    let nonCapital="";
    for(let i in str){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            capital+=str[i];
        }
        else{
            nonCapital+=str[i];
        }
    }
    return capital+nonCapital;
}

console.log(moveCapitalToFront("hApPy"));
console.log(moveCapitalToFront("sAleSforCE"))