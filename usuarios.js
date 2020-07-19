// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]


  // for( let usuario of usuarios){
  //   console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
  // }




// Busca por tecnologia
// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.


function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false

    for( let tecnologia of usuario.tecnologias){
      const enconteiTecnologiaCSS = tecnologia === 'CSS'
      if(enconteiTecnologiaCSS){
        return true;
      }
    }

    return false;

}

// for (let usuario of usuarios){
//   const esteUsuarioPossuiCSS = checaSeUsuarioUsaCSS(usuario)
//   console.log(usuario.nome)
//   console.log(esteUsuarioPossuiCSS)
// }

for (usuario of usuarios) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario.nome} trabalha com CSS`);
  }
}