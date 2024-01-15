// shortcut per l'assegnazione degli elementi HTML tramite id
function cercaID(id){
    output = document.getElementById(id)
    return output
}


const startButtonFirst = cercaID("primo")
const startButtonSecond = cercaID("secondo")

// funzione risoluzione del primo esercizio

startButtonFirst.addEventListener("click", function(){

    let parola = cercaID("palindrome").value
    if(controlloPalindromo (parola)){
        result = "La parola è un palindromo"
    } else {
        result = "La parola non è un palindromo"
    }
    cercaID("risultato1").innerHTML = result
    
}
)

// la funzione restituisce vero se la parola è un palindromo

function controlloPalindromo(word){
    arrayCheck = Array.from(word)
    let flag = true
    let reverse = arrayCheck.length-1
    for (let i=0; i<arrayCheck.length; i++){
        if (arrayCheck[i] != arrayCheck[reverse-i]){
        flag = false
        }
    }
    return flag
}

// funzione risoluzione del secondo esercizio


startButtonSecond.addEventListener("click", function(){

    playerValue = parseInt(cercaID("playerGuess").value)
    if(playerValue>5 || playerValue<1)
    {
        alert("Inserisci un numero tra 1 e 5!")
    } else {

        cpuValue = randomNumber(1,5)
        finalGuess = pariDispari(cpuValue, playerValue)
        if (finalGuess == cercaID("userSel").value){
            cercaID("risultato2").innerHTML = "Hai vinto! <br>" 
        } else {
            cercaID("risultato2").innerHTML = "Hai perso! <br>"
        }
        
        cercaID("risultato2").innerHTML += `Il computer ha estratto ${cpuValue}, la somma è ${finalGuess}`
    }

    
}
)

function pariDispari(x, y){
    let sum = x+y
    if (sum%2 == 0){
        return "pari"
    } else {
        return "dispari"
    }
}


function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}