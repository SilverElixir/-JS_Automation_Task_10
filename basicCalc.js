function calculator(a, b, sign) {
    if (typeof a == "number" && typeof b == "number") {
        switch (sign) {
            case "+":
                return a + b;
                break;
            case "-":
                return a - b;
                break;
            case "*":
                return a * b;
                break;
            case "/":
                if (b == 0) {
                    return `ArithmeticError: You can't divide by 0. Please provide another number`;
                }
                return a / b;
                break;
            default:
                return `Please provide on of the signs: + (add), - (subtract), * (multiply) or '/ (divide)`;
        }
}
        return `a and b should be numbers only. Please try again`;
}

module.exports = { calculator };