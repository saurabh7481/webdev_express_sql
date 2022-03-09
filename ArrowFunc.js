const getProduct = (a, b) => a*b;
console.log(getProduct(3,2))

const student = {
    name: "Saurabh",
    age: 20,
    getInfo() {
        console.log(`My name is ${this.name} and i am ${this.age} years old`)
    }
}

student.getInfo();