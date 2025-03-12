const multiplicationTable=(num)=>{
    let str="";
    for(let i=1;i<=10;i++){
        str+="\n"+num+" * "+i+" = "+(num*i);
    }
    return str;
}

console.log(multiplicationTable(94));//pass desired num in arguement