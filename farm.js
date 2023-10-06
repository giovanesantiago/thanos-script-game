
index = 2
arrayIndexAtaque = []
ids = []
$("#plunder_list tbody tr").each(function (indexInArray, valueOfElement) { 
        if(indexInArray==index){
            arrayIndexAtaque.push(parseInt($(valueOfElement).attr("id").replace(/[^0-9]/g,'')))
            ids.push($(valueOfElement).attr("id"))
            index++
         }
});
console.log(arrayIndexAtaque)
console.log(ids)
contador = 0;
var qntTropaTotal = ($("#light").html())

function atacar(){
    console.log("Ataque : ", contador+1)
    local = "#" + ids[contador] +" > td:nth-child(3) > img"
    titulo = $(local).data('title')
    
    qntTropaPorAtaque = 2
    if(titulo.includes("completo")){
        console.log("Modelo de ataque :  B")
        codigoDeAtaque = 8408
        qntTropaPorAtaque = 4
    }else{
        console.log("Modelo de ataque :  A")
        codigoDeAtaque = 8024
        qntTropaPorAtaque = 2
    }
    
    if(qntTropaTotal >= qntTropaPorAtaque){
        Accountmanager.farm.sendUnits(this, arrayIndexAtaque[contador], codigoDeAtaque)
        qntTropaTotal = qntTropaTotal - qntTropaPorAtaque;
    }else {
        console.log("Esse ataque não foi feito por falta de tropa suficiente ")
    }
    if(qntTropaTotal > 1){
        if(contador < arrayIndexAtaque.length) setTimeout(() => { atacar()}, 5000)
    }
    console.log("Aldeia : ", arrayIndexAtaque[contador])
    console.log("Tropa Disponivel: " , qntTropaTotal)
    contador++
    console.log("----------------------------------------------------------------------------------------")

}
atacar()


