let dia = new Date()
let diasem = dia.getDay() 

 switch(diasem){//o switch não funciona para números reais
    case 0:
        console.log("domingo")
        break//nunca esqueça o break!!!
    case 1:
        console.log("segunda")
        break
    case 2:
        console.log("terça")
        break
    case 3:
        console.log("quarta")
        break
    case 4:
        console.log("quinta")
        break
    case 5:
        console.log("sexta")
        break
    case 6:
        console.log("sábado")
        break
    default:
        console.log("[ERRO] dia inválido")
        break
 }