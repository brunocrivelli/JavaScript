var hora = new Date()
var horas = hora.getHours()
console.log(`agora são exatamente ${horas} horas`)
if(horas <= 12){
    console.log("bom dia!")
}else if(horas <= 18){
    console.log("boa tarde!")
}else if(horas <= 23){
    console.log("boa noite!")
}else{
    console.log("boa madrugada!")
}