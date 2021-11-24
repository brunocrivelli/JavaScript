var inicio = document.getElementById("inicio")
var fim = document.getElementById("fim")
var passo = document.getElementById("passo")
var res = document.getElementById("res")
function verificar(){
 
 if(inicio.value == 0 || fim.value == 0 || passo.value == 0){
     alert("[ERRO] por favor, digite um número")
 }else{
     res.innerHTML = "CONTANDO:"
     let i = Number(inicio.value)
     let f = Number(fim.value)
     let p = Number(passo.value)
  for(let c = i;c <= f;c += p){
     res.innerHTML += `${c}`
}
}
}
    
   
