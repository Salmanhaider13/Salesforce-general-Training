const countVowels = (str) => {
    let count = 0;
    for (let i of str) {
        if ('aeiou'.includes(i.toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Celebration"));
console.log(countVowels("mississippi"));