function convertToRoman(num) {
    const obj = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    
    let roman = "";
    
    for (let key in obj) {
        while (num >= obj[key]) {
            roman += key;
            num -= obj[key];
        }
    }
    
    return roman;
}

// You can test your code by running the function below(test)
// console.log(convertToRoman(36));

module.exports = convertToRoman;
