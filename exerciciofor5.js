numeroEscolhido = parseInt(prompt("digite a quantidade de termos"))
primeiroTermo=1
segundoTermo=1
cont=0

for(cont=1;cont<=numeroEscolhido;cont++){
  terceiroTermo = primeiroTermo + segundoTermo

    console.log(terceiroTermo)
    primeiroTermo=segundoTermo
    segundoTermo=terceiroTermo
}