const findHighestLowest=(str)=>{
    let arr=str.split(" ");
    arr.map((val,index,arr)=>{
        arr[index]=parseInt(val)
    });
    arr.sort((a,b)=>{
        return b-a;
    });
    return arr[0]+" "+arr[arr.length-1];
}
console.log(findHighestLowest("1 2 3 4 5"))
console.log(findHighestLowest("25 4 5 3 2 100"))