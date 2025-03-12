const sortString=(str)=>{
    let arr=str.split("");
    arr.sort();
    return arr.join("");
}

console.log(sortString("hApPy"))