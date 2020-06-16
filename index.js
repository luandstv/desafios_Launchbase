// programa para calcular media dos alunos
// parabenizar a turma caso a media das notas for maior que 5



// const al01 = 'luan'
// const notaAl01 = 10

// const al02 = 'jorge'
// const notaAl02 = 7

// const al03 = 'joao'
// const notaAl03 = 9




const alunos = [
  {
    nome: "luan",
    nota: 4.5
  },
  {
    nome:"diego",
    nota: 9
  },
  {
    nome:"michel",
    nota: 7
  }
]

 const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

if( media >= 5 ){
  console.log(`A media foi de ${media}, Parabens!`)
} else{
  console.log('A media da turma foi abaixo do esperado.')
}

