numero_usuario=parseInt(prompt("digite um numero"))
primeiroNumero=1
segundoNumero = 0

for (cont=3; cont<=numero_usuario; cont++){
  if(cont%2==1){
    segundoNumero = primeiroNumero + cont
    primeiroNumero=segundoNumero
  }
 } 
console.log('a soma de todos os numeros: ' + segundoNumero)