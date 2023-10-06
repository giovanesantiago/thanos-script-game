tempoRelod = Math.trunc(Math.random() * (30000 - 10000 + 1) + 1000)
tempoAtaque = Math.trunc(Math.random() * (5000 - 2000 + 1) + 2000)

setInterval(() => {
    tempoRelod = Math.trunc(Math.random() * (30000 - 10000 + 1) + 10000)
    tempoAtaque = Math.trunc(Math.random() * (10000 - 2000 + 1) + 2000)
    console.log("tempoRelod : ", tempoRelod)
    console.log("tempoAtaque : ", tempoAtaque)
},tempoAtaque)

function teste() {
    tempoRelod = Math.trunc(Math.random() * (30000 - 10000 + 1) + 10000)
    tempoAtaque = Math.trunc(Math.random() * (10000 - 2000 + 1) + 2000)
    console.log("tempoRelod : ", tempoRelod)
    console.log("tempoAtaque : ", tempoAtaque)
    setTimeout(() => { teste()}, tempoAtaque)
}
teste()