const clientes = [
  {
   nome: "silvana",
   sexo: "F",
   idade:48,
   contribuicao: 30
 },
 {
   nome: "Carlos",
   sexo: "M",
   idade:50,
   contribuicao: 35
 }
]

const soma1 = clientes[0].idade + clientes[0].contribuicao
const soma2 = clientes[1].idade + clientes[1].contribuicao


if(clientes[0].sexo == "F"){
 if (clientes[0].contribuicao >= 30 && soma1 >= 85) {
      console.log(`${clientes[0].nome}, você pode se aposentar. `)
     
    
    }else {
      console.log(`${clientes[0].nome}, você ainda nao pode se aposentar. `)
    } 
   } 

   if(clientes[1].sexo == "M"){
     if (clientes[1].contribuicao >= 35 && soma1 >= 95) {
          console.log(`${clientes[1].nome}, você pode se aposentar. `)
         }
         else {
          console.log(`${clientes[1].nome}, você ainda nao pode se aposentar. `)
        } 
       } 
