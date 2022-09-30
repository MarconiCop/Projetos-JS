// EXERCÍCIOS FINAIS

//  SISTEMAS DE NOTAS ESCOLARES 

function transformNumbertoLetter(note = []){

    

    for(position = 0; position < note.length; position++){

        noteTypeA = note[position] >= 90 && note[position] <= 100
        noteTypeB = note[position] >= 80 && note[position] <= 89
        noteTypeC = note[position] >= 70 && note[position] <= 79
        noteTypeD = note[position] >= 60 && note[position] <= 69
        noteTypeF = note[position] < 60 && note[position] >= 0

        if(noteTypeA){
        note[position] = "A"
        
        }
        else if (noteTypeB){
        note[position] = "B"

        }
        else if(noteTypeC){
        note[position] = "C"

        }
        else if(noteTypeD){
        note[position] = "D"

        } else if(noteTypeF) {
        note[position] = "F"
        }
        else{
            note[position] = "Nota Inválida"
        }
            
    }

    return note;
}

let note = [59,10,70,80,91,100]

console.log(note)
console.log(transformNumbertoLetter(note))


// SISTEMAS DE GASTOS FAMILIAR

let spending = {
    income: [],
    expenses: [],
}

let addIncome = 10
let addExpense = 20
let balance = 0

addSpending(addIncome,addExpense)

function addSpending(incomes, expenses){
    spending.income.push(addIncome)
    spending.expenses.push(addExpense)
}

function sumSpending(array){

    let total = 0

    for(let value of array){
        total += value

    }

    return total   
}

function calculateBalance(){
    
    let balance = (sumSpending(spending.income) - sumSpending(spending.expenses)).toFixed(2)
    let balancePositive = balance >= 0
    
    if(balancePositive){
        console.log("A família está com saldo positivo!")
        console.log(`Saldo: R$:${balance}`)
    }else{
        console.log("A família está com saldo negativo!")
        console.log(`Saldo: R$:${balance}`)
    }
}

calculateBalance()


//  SISTEMA DE TEMPERATURAS


function convertTemperatures(stringTemperature){

    const celsiusExists = stringTemperature.toUpperCase().includes("C")
    const fahrenheitExists = stringTemperature.toUpperCase().includes("F")

    if(!celsiusExists && !fahrenheitExists){
        throw new Error("Unidade Inválida")
    }

    let updatedTemperature = Number(stringTemperature.toUpperCase().replace("ºF",""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let TemperatureSign = "ºC"

    if(celsiusExists){
        updatedTemperature = Number(stringTemperature.toUpperCase().replace("ºC",""))
        formula = (celcius) => celcius * 9/5 + 32
        TemperatureSign = "ºF"

    }


    return formula(updatedTemperature) + TemperatureSign
}

try{

let temperature = "10ºC"
console.log(convertTemperatures(temperature))

}catch(error){
    console.log(error.message)
    
}

//  SISTEMA DE BIBLIOTECA

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


function calculateCategoryNumber(booksByCategory){

    let categoryNumber = 0
    
    for(let object of booksByCategory){
         categoryNumber++
    }

    return console.log(`Há ${categoryNumber} categorias`)
}

function numberOfBooksByCategory(booksByCategory){
    
    for(let object of booksByCategory){
        
        console.log(`Há ${object.books.length} livros na categoria ${object.category}`)
       
    }
    
}

function authorsNumber(booksByCategory){

    let numberAuthor = 0
    listAuthor = []
   

    for(let object of booksByCategory){

        for(let position in object.books){

            listAuthor.push(object.books[position].author)
        }
    }

    for(let i = 0; i < listAuthor.length; i++){
        for(let j = 0; j < listAuthor.length; j++){

            if(i != j){
                if(listAuthor[i] === listAuthor[j]){
                    listAuthor.splice(i,1)
                }

            }
            
        }
    }

    numberAuthor = listAuthor.length

    return console.log(`Há ${numberAuthor} autores.`)
            
}

function showBooksofAugusto(booksByCategory, authorName){


    for(let object of booksByCategory){

        for(let position in object.books){

         if(object.books[position].author === authorName){

            console.log(`${object.books[position].title} -${object.books[position.author]}`)
            
         }
        }
    }
    

}

    


calculateCategoryNumber(booksByCategory)
numberOfBooksByCategory(booksByCategory)
authorsNumber(booksByCategory)
authorName = "Stephen R. Covey"
showBooksofAugusto(booksByCategory, authorName)






















