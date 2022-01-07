let ladoCu = document.getElementById("ladoCuadro");
let resultadoArea = document.getElementById("resultadoArea");
let resultadoPeri = document.getElementById("resultadoPeri");
const botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", cuadrado);
function cuadrado(){
    let lado = ladoCu.value;
    resultadoArea.textContent= `El valor del área es: ${(cuadradoArea(lado))}`;
    resultadoPeri.textContent=`El valor del perímetro es: ${(cuadradoPeri(lado))}`;
}


let baseTriangulo = document.getElementById("baseTriangulo");
let alturaTriangulo = document.getElementById("alturaTriangulo");
let calcularTriangulo = document.getElementById("calcularTri");
let contAreaTri = document.getElementById("resultadoAreaTria");
let contPeriTri = document.getElementById("resultadoPeriTria")
calcularTriangulo.addEventListener("click", calcularTri);
function calcularTri(){
    let baseTri = baseTriangulo.value;
    let alturaTri = alturaTriangulo.value;
    contAreaTri.textContent = `El valor del área es: ${trianguloArea(baseTri, alturaTri)}`;
    contPeriTri.textContent = `El valor del perímetro es: ${trianguloPeri(baseTri, alturaTri)}`;
}


let radioCir = document.getElementById("radioCir");
let calcularCir = document.getElementById("calcularCir");
let resultadoAreaCir = document.getElementById("resultadoAreaCir");
let resultadoPeriCir = document.getElementById("resultadoPeriCir");
calcularCir.addEventListener("click", calcularCirculo)
function calcularCirculo(){
    let radioCirculo = radioCir.value;
    resultadoAreaCir.textContent = `El valor del área es: ${circuloArea(radioCirculo)}`;
    resultadoPeriCir.textContent = `El calor del perímetro es: ${circuloPeri(radioCirculo)}`
}



//Se crean todas las funciones de operaciones. 
const cuadradoArea = (lado) => {
    let resultado =    lado * lado;  
    return resultado.toFixed(2);
}
const cuadradoPeri = (lado) => {
    let resultado = lado * 4;
    return resultado.toFixed(2);
}
const trianguloArea = (base, altura) => {
    let resultado = (base * altura) / 2;
    return resultado.toFixed(2);
}

const trianguloPeri = (base, altura) => {
   let resultado = (Math.sqrt(((base/2)  **2) + (altura **2)) + Math.sqrt(((base/2)  **2) + (altura **2)) + base); 

   resultado = parseFloat(resultado);
    return resultado.toFixed(2);
}
trianguloPeri(12,15);
const circuloArea =(radio) => {
    const areaCirc = Math.PI * (radio **2);
    return areaCirc.toFixed(2);
}
const circuloPeri = (radio) => {
    const periCirc = 2 * Math.PI * radio;
    return periCirc.toFixed(2);
}


