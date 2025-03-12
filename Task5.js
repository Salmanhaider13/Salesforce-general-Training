const isLargestSwap = (num) => {
    let tensDigit = Math.floor(num / 10);
    let onesDigit = num % 10;
    let swappedNum = onesDigit * 10 + tensDigit;
    return num > swappedNum;
}

console.log(isLargestSwap(43))
console.log(isLargestSwap(29))