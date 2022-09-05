
class Calculator {
    constructor() {
        //properties

        this.pi = Math.PI
        this.e = Math.exp(1)
    }


    //methods
    ratio(x, y, width) {
        console.log(`The ratio is : ${y / x * width}`);

    }

    percentage(x, y) {
        console.log(`Percentage is ${x / y * 100}`);
    }

    add(x, y) {
        console.log(`Addition is ${x + y}`);
    }


    subtract(x, y) {
        console.log(`Subtraction is ${x - y}`);
    }


    multiply(x, y) {
        console.log(`Multiplication is ${x * y}`);
    }


    divide(x, y) {
        if (y !== 0) {
            console.log(`Quotent is ${x / y}`);
        } else {
            console.log(`Make sure y is not 0`);
        }


    }

    modulation(x, y) {
        if (y !== 0) {
            console.log(`Modulation is ${x % y}`);
        } else {
            console.log(`Make sure y is not 0`);
        }

    }

    elevate(x, y) {
        console.log(`Power of x is ${x ** y}`);
    }

    sqrt(x, y) {
        console.log(`Square root of x is ${x ** 1 / 2}`);
    }


}



const calculate = new Calculator()

console.log(calculate.pi);
console.log(calculate.ratio(2, 3, 200));
console.log(calculate.percentage(2, 3));
console.log(calculate.add(2, 3));
console.log(calculate.subtract(2, 3));
console.log(calculate.multiply(2, 3));
console.log(calculate.divide(2, 3));
console.log(calculate.modulation(2, 3));
console.log(calculate.elevate(2, 3));
console.log(calculate.sqrt(2, 3));

