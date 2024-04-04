String.prototype.plus = function (str) {
    let result = '';
    let carry = 0;
    let maxLength = this.length > str.length ? this.length : str.length;
    for (let i = 0; i < maxLength || carry; i++) {
        const digit1 = +this[this.length - 1 - i] || 0;
        const digit2 = +str[str.length - 1 - i] || 0;
        const sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = sum >= 10 ? 1 : 0;
    }

    return result;
};



String.prototype.minus = function (str) {
    let result = '';
    let borrow = 0;
    let thisIndex = this.length - 1;
    let strIndex = str.length - 1;

    for (let i = 0; i <= thisIndex; i++) {
        let digit1 = +this[thisIndex - i] - borrow;
        let digit2 = +str[strIndex - i] || 0;

        if (digit1 < digit2) {
            digit1 += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }

        result = (digit1 - digit2) + result;
    }

    return result;
}
String.prototype.divide = function (str) {
    let result = '';
    let dividend = this;

    if (dividend.length >= str.length) {
        let quotient = 0;

        let dividendNum = +dividend;
        let strNum = +str;

        while (dividendNum >= strNum) {
            dividend = dividend.minus(str);
            dividendNum = +dividend;
            quotient++;
        }

        result += quotient;
    }

    return result;
};


String.prototype.multiply = function (str) {
    let result = '0';
    for (let i = str; parseInt(i) > 0; i = i.minus('1')) {
        result = result.plus(this);
    }
    return result;
};

console.log("120 + 45 = " + "120".plus("45"));    // Output: "165"
console.log("30 - 12 = " + "30".minus("12"));   // Output: "18"
console.log("100 / 3 = " + "100".divide("3"));  // Output: "33"
console.log("12 * 12 = " + "12".multiply("12"));  // Output: "144"
