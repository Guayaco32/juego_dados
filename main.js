let coins = 50
let historial = []
const dadoAleatorio = function getRandomInt(min, max) {
    return Math.floor (Math.random() * (max - min + 1)) + min;
}
alert("Empiezas con 50 MONEDAS, el reto es llegar a 100 MOONEDAS. Si ganas, lo que apuestes se te duplicara")

while (coins>0 && coins<100) {
    let tirada = dadoAleatorio (1, 6)
//Pompt con variable si cancelar sigue bucle obligado
    let numeroApostado = parseInt(prompt("Elija un número del 1-6"));
    if (Number.isNaN(numeroApostado)) {
        alert("Tienes que terminar el juego😬");
    }
//LEY
    if (numeroApostado<1 || numeroApostado>6) {
        alert("Número no valido.🤨");
        continue;
    }
//Pompt2 con variable si cancelar sigue bucle obligado
    let cantidadApostada = parseInt(prompt("Elija la cantidad de monedas que desea apostar"));
    if (Number.isNaN(cantidadApostada)) {
        alert("Tienes que terminar el juego😬");
    }
//LEY
    if (cantidadApostada > coins || cantidadApostada <= 0) {
        alert("Apuesta inválida.🤨");
        continue;
    }
//Resto primero 
coins -= cantidadApostada
//Relsultados
    if (numeroApostado === tirada) {
        coins += cantidadApostada * 2
        alert("¡¡Ganaste!!😁, el número fue: " + tirada + " | Tienes " + coins + " Monedas")
    }else{
        alert("Perdiste...😢, el número fue: " + tirada + " | Te quedan " + coins + " Monedas" + ", perdiste " + cantidadApostada + " monedas")
    }
    //HISTORIAL DE TIRADAS
    historial.push(tirada);
}
//
if (coins >= 100) {
    alert("🏆 Ganaste el juego");
    alert("Tu historial de tiradas es el siguiente: " + historial)
} else {
    alert("💀 Te quedaste sin monedas");

}
