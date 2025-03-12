const removeLeadingTrailing=(numString)=>{
    return parseFloat(numString).toString();
}
console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));