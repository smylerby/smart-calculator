class SmartCalculator {
    constructor(initialValue) {
        this.example = String(initialValue);
    }
    add(number) {
        let add = '+' + number;
        this.example += add;
        return this;
    }
    subtract(number) {
        let sub = '-' + number;
        this.example += sub;
        return this;
    }
    multiply(number) {
        let mult = '*' + number;
        this.example += mult;
        return this;
    }
    devide(number) {
        let dev = '/' + number;
        this.example += dev;
        return this;
    }
    pow(number) {
        let pow = '**' + number;
        this.example += pow;
        return this;
    }
    valueOf(){
        return eval(this.example);
    }
}
module.exports = SmartCalculator;