const rigthShift=(num1,num2)=>{
    return Math.floor(num1/(2**num2));
}

console.log(rigthShift(80,3))
console.log(rigthShift(52,4))