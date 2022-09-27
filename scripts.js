// EXERCÍCIOS FINAIS

//  SISTEMAS DE NOTAS ESCOLARES 

function transformNumbertoLetter(note = []){

    for(position = 0; position < note.length; position++){
        if(note[position] >= 90){
            note[position] = "A"
        }
        else if (note[position] >= 80 && note[position] <= 89){
        note[position] = "B"

        }
        else if(note[position] >= 70 && note[position] <= 79){
        note[position] = "C"

        }
        else if(note[position] >= 60 && note[position] <= 69){
        note[position] = "D"

        } else {
        note[position] = "F"
        }
    
    }

    return note;
}

let note = [59,60,70,80,91,100]

console.log(note)
console.log(transformNumbertoLetter(note))