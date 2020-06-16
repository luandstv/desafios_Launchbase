const programador = {
  nome: 'Luan',
  idade: 23,
  tec: [
    {
      nome:'C++',
      especialidade:'Desktop'
    },
    {
      nome:'Python',
      especialidade:'Data Science'
    },
    {
      nome:'JavaScript',
      especialidade:'Web/Mobile'
    }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia
 ${programador.tec[2].nome} com especialidade em ${programador.tec[2].especialidade}`)