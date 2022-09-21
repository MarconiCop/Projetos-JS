// OBJECT

const person = {
    name:"Marconi",
    age: 22,
    weight: 70.1,
    isAdmin: true
}

console.log(` ${person.name} tem ${person.age} anos!`)

//  ARRAY

const animals = ["Lion", "Monkey", {name:"Cat", age: 3}]

console.log(`${animals[0]}. O array tem ${animals.length} animais`)
console.log(`${animals[2].name} tem ${animals[2].age} anos`)