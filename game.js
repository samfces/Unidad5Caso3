

window.addEventListener("load", function() {
    reset();
});

//Declaramos todas las variables
var toClick = 1;
var numberArray;
var numberA;
var numberB;
var numberC;
var numberD;

//Método de manipulación de click.
//En función del número en el cual hagamos click,
//obtendremos una salida u otra.
function handleClick(clickedNumber){
    if(clickedNumber == toClick){
        toClick++;
        if(toClick > 4){
            alert("Has ganado!");
            reset();
        }
    } else {
        alert("Te has equivocado, intentalo de nuevo");
        reset();
    }
}

//Obtención de números aleatorios no repetidos
function getRandomValue(){        
    const random = Math.floor(Math.random() * numberArray.length);
    const val = numberArray[random];
    numberArray.splice(random, 1)
    return val;
}

//Función de reset del juego
function reset(){
    numberArray = [1, 2, 3, 4];
    numberArray.sort(() => (Math.random() > .5) ? 1 : -1);
    numberA = numberArray[0];
    numberB = numberArray[1];
    numberC = numberArray[2];
    numberD = numberArray[3];
    toClick = 1;
    updateValue();
}

//Actualizador de valores en HTML
function updateValue(){
    document.getElementById("div1").innerHTML = numberA;
    document.getElementById("div2").innerHTML = numberB;
    document.getElementById("div3").innerHTML = numberC;
    document.getElementById("div4").innerHTML = numberD;
}