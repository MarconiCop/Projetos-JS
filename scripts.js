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











