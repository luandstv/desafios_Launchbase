//desafio 01

//verificar se a pessoa é maior igual a 18 anos
//se sim, deixar entrar, se não, bloquear a entrada
//se a pessoa tiver 17 anos, avisar para voltar quando fizer 18 anos


const idade = 19

if( !(idade >= 18)  || idade === 17){
  console.log("Barrar entrada, volte quando tiver com 18 anos")
}else{
  console.log("liberar entrada")
}