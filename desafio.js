const nome = 'Silvana'
const sexo = 'M'
const idade = 70
const contribuicao = 25

const calContri = idade + contribuicao


const HPodeAposentar = sexo == 'M' && contribuicao >= 35 || calContri >= 95
const MPodeAposentar = sexo == 'F' && contribuicao >= 30 || calContri >= 85

if ( HPodeAposentar || MPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}

console.log(calContri)