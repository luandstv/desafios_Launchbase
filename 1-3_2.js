// Soma de despesas e receitas
// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

// Utilize o array de usuários abaixo:


const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];


// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:





function calculaSaldo(receitas, despesas) {
  
  const resultadoReceitas = somaNumeros(receitas)
  const resultadoDespesas = somaNumeros(despesas)

  return resultadoReceitas - resultadoDespesas


}

// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
  let soma = 0;
  for(numero of numeros){
    soma = soma+numero
  }

  return soma

}

for (let usuario of usuarios){
  const total = calculaSaldo(usuario.receitas, usuario.despesas)

  const saldoPositivo = total >= 0
  if(saldoPositivo){
    console.log(`${usuario.nome} possui saldo POSITIVO de ${total.toFixed(2)}`)
  }else{
    console.log(`${usuario.nome} possui saldo NEGATIVO de ${total.toFixed(2)}`)

  }
}


// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

// Fulano possui saldo POSITIVO de 43.3
// Sicrano possui saldo NEGATIVO de -90.3