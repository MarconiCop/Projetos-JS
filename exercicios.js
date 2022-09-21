//  1. 

var weight
let weight 
const weight = 70.1

//  2. 

console.log(typeof weight) // (var e let: undefined. const: number)

//  3.

let name = "Marconi"
let age = 22
let stars = 4.8
let isSubscribed = true

//  4. Object

let student = {};
console.log(typeof student)

//  4.1

student = {
    name: "Marconi",
    age:  22,
    weight: 70.1,
    isSubscribed: true
}

//  4.2

console.log(`${student.name} de idade ${student.age} pesa ${student. weight} kg.`)

//  5.

let students = []

//  6.
    students = [student]

//  7. 

console.log(students[0])

//  8.

const studentDois = {
        name: "Mateus",
        age:  21,
        weight: 65.1,
        isSubscribed: true
    }

// students = [student, studentDois]
students[1] = studentDois 

//  9. É Undefined pois é variável var, ou seja global, então ela é somente declarada no momento em que é socilidado o valor no console.
