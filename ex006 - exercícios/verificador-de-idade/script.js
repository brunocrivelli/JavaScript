function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
   
   
    if (fano.value <= 1920 || fano.value > ano) {
        window.alert("[ERRO] verifique os dados e tente novamente!")
    }else {
        let sex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement("img")
        img.setAttribute("id", "foto")
            if(sex[0].checked){
                genero="homem"

                if (idade < 10){//criança
                    img.setAttribute("src", 'imagens/crianm.png')
                }
                else if (idade < 21 ){//adolecente
                    img.setAttribute("src", 'imagens/adom.png')
                }
                else if (idade < 50){//adulto
                    img.setAttribute("src", "imagens/adulm.png")
                }
                else{//idoso
                    img.setAttribute("src", "imagens/velhm.png")
                }
            }else{
                genero="mulher"

                if (idade < 10){//criança
                    img.setAttribute("src", "imagens/crianf.png")
                    
                }else if(idade < 21 ){//adolecente
                    img.setAttribute("src", "imagens/adof.png")

                }else if(idade < 50){//adulto
                    img.setAttribute("src", "imagens/adulf.png")

                }else{//idoso
                img.setAttribute("src", "imagens/velhf.png")
            }
            }
            res.innerHTML = `detectamos: <strong>${genero}</strong> com <strong>${idade}</strong> anos`
            res.appendChild(img)
        }
        }
         
    
   
