let ladoCu = document.getElementById("ladoCuadro");


const botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", cuadrado);


function cuadrado(){
    let lado = ladoCu.value;

    alert(cuadradoArea(lado));
    alert(cuadradoPeri(lado));
}




//Se crean todas las funciones de operaciones. 
const cuadradoArea = (lado) => lado * lado;  
const cuadradoPeri = (lado) => lado * 4;
const trianguloArea = (base, altura) => (base * altura) / 2;
const trianguloPeri = (base, altura) => Math.sqrt(((base/2)  **2) + (altura **2)) + Math.sqrt(((base/2)  **2) + (altura **2)) + base; 
trianguloPeri(12,15);
const circuloArea =(radio) => {
    const areaCirc = Math.PI * (radio **2);
    return areaCirc.toFixed(4);
}
const circuloPeri = (radio) => {
    const periCirc = 2 * Math.PI * radio;
    return periCirc.toFixed(2);
}


