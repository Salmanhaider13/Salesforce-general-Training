const toSingleDigit = (num1, num2) => {
    let num = num1 + num2;
    while (Math.floor(num / 10) != 0) {

        let newNum = 1;
        while (num>0) {
            newNum*=(num%10);
            num = Math.floor(num / 10);
        }
        num = newNum
    }

    return num;
}

console.log(toSingleDigit(16,28));
console.log(toSingleDigit(59,20));