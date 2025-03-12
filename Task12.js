const factors=(num)=>{
    let arr=[1];
    let check=2;
    while(check<=(num/2)){
        if(num%check==0){
            arr.push(check);
        }
        check++;
    }
    arr.push(num);
    return arr;
}

console.log(factors(12));
console.log(factors(4));