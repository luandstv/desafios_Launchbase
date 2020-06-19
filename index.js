// programa para calcular media dos alunos
// parabenizar a turma caso a media das notas for maior que 5



// const al01 = 'luan'
// const notaAl01 = 10

// const al02 = 'jorge'
// const notaAl02 = 7

// const al03 = 'joao'
// const notaAl03 = 9




const alunosturmaA = [
  {
    nome: "luan",
    nota: 10
  },
  {
    nome:"diego",
    nota: 10
  },
  {
    nome:"michel",
    nota: 10
  },
  {
    nome:"luis",
    nota: 4.5
  }
]

const alunosturmaB = [
  {
    nome: "jorge",
    nota: 10
  },
  {
    nome:"zezinho",
    nota: 10
  },
  {
    nome:"lucas",
    nota: 10
  }
]

  // função de calcular a media dos alunos
function calculaMedia(alunos){
    let soma = 0;
    for ( let i = 0; i < alunos.length; i++){      
        soma = soma + alunos[i].nota      
        
    }
      const media = soma / alunos.length
      return media
    
}


   // função de calculo de media onde pega os dados de determinada turma e aplica na função
 const media1 = calculaMedia(alunosturmaA)
 const media2 = calculaMedia(alunosturmaB)

function enviarmensagem (media, turma){
  if( media >= 5 ){
    console.log(`A media da turma ${turma} foi de ${media}, Parabens!`)
  } else{
    console.log(`A media da turma ${turma} foi abaixo do esperado.`)
  }
}

enviarmensagem(media1, 'A')
enviarmensagem(media2, 'B')



