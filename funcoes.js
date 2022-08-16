function imc(peso, altura){
  let result = peso / (altura * altura);
  return console.log(result.toFixed(2)); 
}

imc(88, 1.90)

const calcularArea = (altura, largura) => {
  let result = altura * largura
  return console.log(result)
}

calcularArea(2, 5)