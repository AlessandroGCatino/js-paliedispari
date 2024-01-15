function cercaID(id){
    output = document.getElementById(id)
    return output
}


const startButtonFirst = cercaID("primo")
const startButtonSecond = cercaID("secondo")


startButtonFirst.addEventListener("click", function(){

    let parola = cercaID("palindrome").value
    if(controlloPalindromo (parola)){
        result = "La parola è un palindromo"
    } else {
        result = "La parola non è un palindromo"
    }
    document.querySelector("p").innerHTML = result
    
}
)

startButtonSecond.addEventListener("click", function(){

    
    document.querySelector("p").innerHTML = `${a}`
    
}
)

function controlloPalindromo(word){
    arrayCheck = Array.from(word)
    let output = ""
    let flag = true
    let reverse = arrayCheck.length-1
    for (let i=0; i<arrayCheck.length; i++){
        if (arrayCheck[i] != arrayCheck[reverse-i]){
        flag = false
        }
    }

    return flag
}


function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}