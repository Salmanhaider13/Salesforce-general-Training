const modifyString = (str) => {
    let result = "";
    for (let i in str) {
        if (str.charCodeAt(i) % 2 === 0) {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}

console.log(modifyString("THE LITTLE MERMAID"))