//  EXPRESSIONS AND OPERATORS

let number = 1

console.log(number + 1) //BINARY
console.log(++number)   //UNARY
console.log(true ? "alo" : "nada") //TERNARY


// NEW

let name = new String("Marconi")
name.surName = "Copati"
let age = new Number(22)
let date = new Date() //PODE COLOCAR DATA COMO ARGUMENTO
console.log(name, age, date)

//  UNARY - DELETE

const person = {
    name: "Marconi",
    age: 22,
}

delete person.age

console.log(person)