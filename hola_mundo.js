/*/ ¡Hola Mundo desde Digital House!
let saludo = "¡Hola Mundo desde Digital House!";
console.log( saludo );

//Declaracion de variables
// identificadores para variable
//no usar separados
//no usar aracteres especiales
//no iniciar con numeros ni matuscula
//usar practica camel case ejemplo nombreApellido
// repasar variables locales y global es let y global es var en video
// en datos definidos en variables variables cuando se usan las "" o '' es indicativo de dato string 
// si es string es con comillas simples
// si es un valor numerico debe y puede ir sin comillas
// las varibles let pertenecen esclusivamente a un bloque de ejecución (bloque de ejecución es todo aquel codigo que se encuentra dentro de unas llaves {})
// puedo tener variables tipo let en bloques distintos con el mismo nombre sin afectar su valor que a diferencia de var esto si pasa, si se declaran 2 veces 
// con el mismo nombre pasa que da error indicando que ya a sido declarada, no se pisa el valor como pasaria con "var"
// con las variables const tiene las mismas particularidades de let pero la unica diferecia es que nunca le podremos cambiar su valor una vez asignado

// las variables var son de uso global
var miNombre = "Pedro";
//miNombre= "Carlos" cambiando o declarando el valor de la variable
console.log( miNombre );

// las variables let son para uso local 
let miContador = "10";
// miContador = "20"
console.log( miContador );

// las contactenes son variables que no se pueden cambiar a lo largo del codigo mantienen su valor no es sobreescribible
const pi = 3.14;

//Tipos de datos
//Numericos - number
let edad = "35"; //numero entero
console.log( edad );

let precio = "45.30" // decimales, se espresan como en USA decimales con .
console.log( precio );

//Cadena de caracteres - string estas se pueden declarar tanto con comillas simples o comillas dobles
let nombre1 = 'Pedro Gonzalez';
console.log( nombre1 );

let nombre2 = "Calos Hurtado";
console.log( nombre2 );

//Logicos o booleanos - boolean, importante estos datos no se encierran entre comillas porque estariamos cambiando un buuleano a string
let hoyEsVierne = true;
let elDiaEstaSoleado = false;

//datos NaN not a number que son datos especiales, este espifica cuando no es un numero ni tampoco una cadena de texto, estos se reflejan en operaciones erradas
// ejemplo un numero por una letra
"a" * 2;

// los datos que arrojan undefined, es porque no tienen un valor definido previamente aca un ejemplo
let dato;
console.log(dato);

//datos Null son para colocar una variable vacia sin comillas
let dato =null;

// datos de objeto literar se usan las llaves {clave:valor} esta seria la sintaxis y en el se puede colocar n cantidad de claves con valores 
// separadolos con una , al final de cada valor para asi agrupar varios, es indiferente puede ser let var o const
const objeroLiteral = {
    programa: "el precio de la historia",
    horario: "2pm los martes y jueves",
    clasificacion: "adulto",
    calificacion: 33
}
console.log(objeroLiteral.programa);
console.log(objeroLiteral);

// Arreglos - array - lo podemos reconocer por los corchetes []
// arreglo no definido seria asi let x = [];
// otra forma hacer un array definido con espacios seria asi let a = new Array ( 10 );

let comidasFavoritas = ['Milaneza napolitana', 'Ravioles con bologneza', 'Pizza calabresa'];
console.log( comidasFavoritas );

let numerosSorteados = [12, 35, 54, 76, 80];
console.log( numerosSorteados );

//Operadores
//De asignacion 
//asigno el valor de la derecha a la variable de la izquierda

//REVISAR DOCUMENTACION OPERADOR https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

let edad2 = 45;
console.log( edad2 );

//Aritmético - nos permite hacer operaciones de matematicas
let edad3;
edad3 = 10 + 15;
console.log( edad3 ); //suma

let edad4;
edad4 = 40 - 15;
console.log( edad4 ); //resta

let edad5;
edad5 = 10 * 2;
console.log( edad5 ); //multiplicación

let edad6;
edad6 = 15 / 10;
console.log( edad6 ); //división

let edad7;
edad7 = 20;
edad7 = edad7 +1;
edad7 += 1;
edad7 ++; //incrementa el valor +1
console.log( edad7 );

let edad8;
edad8 = 40;
edad8 --; //decrementa el valor -1
console.log( edad8 );

let edad9;
edad9 = 15 % 5; //muestra como resultado el residuo de una division, siver para saber si el numero es par o no
console.log( edad9 );

//operador de potencia
console.log( 3 ** 2);

//De comparacion siemple -- estos siempre arojan como resultados booleanos
let numeroEsIgual;
numeroEsIgual = 10;
console.log( numeroEsIgual == 16);

let numeroEsIgual2;
numeroEsIgual2 = 10;
console.log( numeroEsIgual2 == 10); //Igualdad

let numeroEsIgual3;
numeroEsIgual3 = 10;
console.log( numeroEsIgual3 != 10); //desigualdad para la desigualdad estricta colocamos !==

let numeroEsIgual4;
numeroEsIgual4 = "10";
console.log( numeroEsIgual4 === 10); //Igualdad estricta, discrimina si entre variables string o number

let numeroEsIgual5;
let paraComparar;
numeroEsIgual5 = "10";
paraComparar = "10";
console.log( numeroEsIgual5 === paraComparar); //ejemplo cuando ambas variables se definen como let si da true

let numeroEsIgual6;
numeroEsIgual6 = "10";
console.log( numeroEsIgual6 !== 15); //desigualdad estricta, discrimina si entre variables string o number
//la desigualda normal es de esta forma !=

let numeroEsMayorMenor;
numeroEsMayorMenor = "10";
console.log( numeroEsMayorMenor > 5); //mayor que

let numeroEsMayorMenor2;
numeroEsMayorMenor2 = "10";
console.log( numeroEsMayorMenor2 > 15); //mayor que

let numeroEsMayorMenor3;
numeroEsMayorMenor3 = "1";
console.log( numeroEsMayorMenor3 < 5); //menor que

let numeroEsMayorMenor4;
numeroEsMayorMenor4 = "10";
console.log( numeroEsMayorMenor4 < 5); //menor que

let numeroEsMayorMenor5;
numeroEsMayorMenor5 = "12";
console.log( numeroEsMayorMenor5 >= 12); //mayor igual que

let numeroEsMayorMenor6;
numeroEsMayorMenor6 = "16";
console.log( numeroEsMayorMenor6 <= 16); //menor igual que

//Operadores lógicos para comprarar y negar booleanos

// Este es AND y se expresa con 2 signos && de Ampersand - todos los valores deven de coincidar true para que sea true
console.log( (10 > 15) && (10 != 20) );

console.log( (12 % 4 == 0) && (12 != 24) );

// El OR se expresa con dos singonos de || barras - al menos un valor debe de ser true para que resulte true
console.log( (10 > 15) || (10 != 20)); // cumple la derecha

console.log( (12 % 4 == 0) && (12 != 12) ); // ambas lados da true por lo que el resultado es false

//NOT se expresa con el signo de ! admiración antes del valor 
//es el contrario del booleano resultante si es false seria true y si true es false y asi susecivamente
console.log(!(20 > 15));

console.log(!(20 > 35));

//Operadores de concatenacion
//Esto une cadenas de texto y arroja como resultado otra cadenas de texto
let nombre = 'Jesús';
let apellido = 'Gonzalez';
let nombreCompleto = nombre + ' ' + apellido;// las comillas simples con espacio son para separar las variables
console.log(nombreCompleto);

//Ejemplo de como un valor numerico pasa a cadena de texto
let fila = 'M';
let asiento = 35;
let ubicacion = fila + asiento;
console.log(ubicacion);

//Funciones, estructura basica, existen 2 expresadas y declaradas
// Expresada
let sumarNumeros = function(numeroA, numeroB){
    return numeroA + numeroB;
}
console.log(sumarNumeros(8,10));

// Declarada
function restar(numeroC, numeroD){
    return numeroC - numeroD;
}
console.log(restar(72,39));

// el scope es el alcanse que tiene una variable dentro de una funcion es decir variables declaradas dentro de una funcion son scope locar y las declaradas por 
//fuera son de alcanse globar es decir que se pueden llamar en una funcion pero estan fueras de ellas y estan condicionados a modificaciones a lo largo del
//codigo

let elDoble = function(numeroElDoble){
    return numeroElDoble * 2;
}
console.log(elDoble(34));

//Condicionales if, else y else if
let edad10 = 18;
let acceso = '';

if (edad10 < 16){
    acceso = 'Prohibido';
} else if ( edad10 >= 16 && edad10 <= 18) {
    acceso = 'Permitido solo con acompañante de un mayor';
} else {
    acceso = 'Permitido';
}
console.log(acceso);


function perimetro(radio){
    return (3.14 * radio * 2);
}
function area(radio){
    return (3.14 * radio * radio);
}

function longitudNombreCompleto(nombre, apellido) {
  return nombre.length + apellido.length + 1
}


Definí la función sePoneLaOlla, la cual recibe por parámetro el string del día de la semana. Esta función retorna 
"¡Pongamos la olla, hoy se comen pastas!" si recibe por parámetro el valor "Domingo", caso contrario retornará 
"Mejor lo dejamos para el domingo".*/

/*let diaDeLaSemana = "Domingo";
let mensaje = "";
function sePoneLaOlla(diaDeLaSemana) {
    if ( diaDeLaSemana === "Domingo"){
        return mensaje = "¡Pongamos la olla, hoy se comen pastas!";
    } else {
        return mensaje = "Mejor lo dejamos para el domingo";
    }
 }
/*Definí la función elMayor, la cual debe recibir por parámetro dos números, y como resultado nos devuelva (retorne) el 
mayor de los dos. Por ejemplo, si la función recibiera 4 y 5 retornaría 5 pues es el mayor, y si pasamos 10 y 4, retornará 10.
function elMayor(numero1, numero2){
    if ( numero1 > numero2){
        return elMayor = numero1;
    } else {
        return elMayor = numero2;
    }
 }
 console.log(elMayor(2,19))


//Array
let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina"]
let mundo = ["hola","mundo!"]
let hola2 = ["hola","mundo!"]

console.log(seriesFavoritasDeHector);
console.log(seriesFavoritasDeAna);
console.log(mundo);
console.log(hola2);

// Ciclos
for ( let imprimirAzul4 = 0 ; imprimirAzul4 < 4; imprimirAzul4++ ){ 
    console.log ("¡Hola!");
}



function imprimirAzul4()
{
    for(let i = 0 ; i < 4 ; i++)
    {
        console.log('Azul')
    }
}
imprimirAzul4();


function trasladar(){
    let unArray = [1, 2, 3];
    let otroArray = [4, 5];
    unArray.pop
    otroArray.push
}

//Condicionales if, else y else if
let edad10 = 12;
let acceso = '';

if (edad10 < 16){
    acceso = 'Prohibido';
} else if ( edad10 >= 16 && edad10 <= 18) {
    acceso = 'Permitido solo con acompañante de un mayor';
} else {
    acceso = 'Permitido';
}
console.log(acceso);
let positivo = 1;
let cero = 0;
let negativo = -1;
function signo(numero){
    if (numero >= 1)
    return (positivo);
    else if (numero == 0)
    return (cero);
    else (numero < 0)
    return (negativo)
}
console.log(signo(-10));
let diaDeLaSemana = "";
let horaActual = 0;
function puedoIrAlBanco (diaDeLaSemana, horaActual){
    return ((diaDeLaSemana == "Lunes") || (diaDeLaSemana == "Martes") || (diaDeLaSemana == "Miercoles") || (diaDeLaSemana == "Jueves") || (diaDeLaSemana == "Viernes"))
    && ((horaActual >= 10) && (horaActual <= 15))

}
console.log(puedoIrAlBanco("Martes",10));
let profesion = "";
let nacionalidad = "";
let kilometro = 0;
function filosofoHipster(profesion, nacionalidad, kilometro) {
    return  (profesion == "Musíco") && (nacionalidad == "Argentina") && (kilometro  >= 2);
}
console.log(filosofoHipster("Musíco", "Argentina", 3));

function esNumeroDeLaSuerte(numero){
    return (numero > 0) && (numero % 2 === 0 || numero % 3 === 0) && (numero !== 15)
}

console.log(esNumeroDeLaSuerte(21))


//Tené en cuenta que el mínimo de edad para realizar el trámite para las mujeres (género "F") es de 60 años, mientras 
//que para los hombres (género "M") es 65. En ambos casos, se deben contar con al menos 30 años de aportes jubilatorios.
function puedeJubilarse(edad, genero, aniosAporte) {
    return  ((edad >= 60) && (genero == "F") || (edad >= 65) && (genero == "M")) && (aniosAporte >= 30);
}
console.log(puedeJubilarse(65,"M",30));


//En el parque de diversiones de la ciudad instalaron una nueva montaña rusa y nos pidieron ayuda para que le avisemos
//a las personas, si pueden subirse o no, antes de hacer la fila. Los requisitos para que una persona pueda subir a la atracción son:
//Alcanzar la altura mínima de 1.5m (o 1.2m si está acompañada por un adulto)
//No tener ninguna afección cardíaca
function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
    return ((alturaPersona >= 1.2 && vieneConCompania == true && tieneAfeccionCardiaca == false) 
    || (alturaPersona >= 1.5 && vieneConCompania == false && tieneAfeccionCardiaca == false));
}
console.log(puedeSubirse(1.2, false, false))

function medallaSegunPuesto(medalla){
    let mensaje = "";    
    if ( medalla == 1){
        return mensaje = "Oro";
}   
    else if ( medalla == 2) {
        return mensaje = "Plata";
}   
    else if ( medalla == 3) {
        return mensaje = "Bronce";
} 
    else {
        return mensaje = "Seguí participando";
}
}
console.log(medallaSegunPuesto(1));
let revistas = ["Zeta", "Hola", "Mecanica"];
console.log(revistas[1]);

let modelosDeCarro = ["Chevrolet", "Toyota", "Mazda"];
console.log(modelosDeCarro[2]);

let catalogoProdicto = ["Camisas", "Pantalones"];
console.log(catalogoProdicto[1]);

function medallaSegunPuesto(premio){
    let mensaje = ["Oro", "Plata", "Bronce", "Seguí participando"];
    let medalla = [1, 2, 3];
    if ( premio == medalla[0] ) {
        return mensaje[0];
}   
    else if ( premio == medalla[1] ){
        return mensaje[1];
}   
    else if ( premio == medalla[2] ){
        return mensaje[2];
} 
    else {
        return mensaje[3];
}
}
console.log(medallaSegunPuesto(4));

function imprimir5veces5(){
    for (let i = 0; i < 5; i++){
        console.log(5)
    }
}
imprimir5veces5();

function imprimir5veces5(){
    let dato = 5;
    for (let numero = 1; numero <= 5; numero++){
        console.log(dato);
}
}
imprimir5veces5()

function pasitoAPasito(){
    for (let i = 0; i <= 4; i++){
        console.log(i);
}
}
pasitoAPasito();

function pasandoPorI(){
    for (let x = 0; x <= 4; x++){
        console.log("acá i tiene el valor de " + x);        
    }
}
pasandoPorI();

function  pasandoPorLosPares (){ 
    for (let i = 0; i <= 6; i++){
        if ((i%2) == 0){
    console.log("acá i tiene el valor de"+ i);
        }else{}
}
}

function imprimirAzul(value) {
  for (i = 0 ; i<value; i++) {
    console.log("Azul");
  }
}
imprimirAzul(100);

let totalCalorias = 0; // Acá inicializo la variable totalCalorias con un valor de 0 (cero)

for( let i = 0 ; i < 5 ; i++ ){ 
       totalCalorias = totalCalorias + 300;  // Acá la variable, como ya esta declarada por fuera del for, puede ser modificada durante las iteraciones y no se "reinicia"
}

console.log(totalCalorias); // La variable totalCalorias acá ya existe y nos devuelve el valor total que buscábamos.

function sumar5MonedasDe25Centavos(){    
    let totalMonedas = 0;
    for ( let i = 0 ; i < 5 ; i++ ){        
        totalMonedas = totalMonedas + 0.25;        
    }    
    return totalMonedas;
}
console.log(sumar5MonedasDe25Centavos())

function sumarMonedasDe25 (cantidadDeMonedas){
    let sumaMonedas = 0;
    for ( let i = 0 ; i < cantidadDeMonedas ; i++ ){ 
        sumaMonedas = sumaMonedas + 0.25;
           }
           return sumaMonedas; 
}
console.log(sumarMonedasDe25(7));


function sumaDeLosParesDel0Al(x){
    let sumaPar = 0;
    for (let i = 0 ; i < x ; i++ ){
        if ((i % 2) == 0){
    sumaPar = sumaPar + i
    }
}
return sumaPar;
}
console.log(sumaDeLosParesDel0Al(10))

function sumaDeLosParesDel0Al(x){
    var suma = 0
    for (var i=1; i<=x; i++){
      if (i%2 == 0) {
        suma += i
      }
    }
    return suma
}  
console.log(sumaDeLosParesDel0Al(10));

function sumatoriaHasta(x){
    let numeros = 0;
    for (let i = 0; i < x; i++){
        numeros=numeros +i;      
    }
    return numeros;
}
sumatoriaHasta(4);

function caloriasDeTrote(x){
    let calorias = 0;
    for (let i = 1; i <= x; i++){
        calorias += i * 5   
    }
    return calorias;
}
console.log(caloriasDeTrote(10));

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
    if (mes>0) cantidad++; 
    }
  return cantidad;
}
console.log(cantidadDeMesesConGanancia([0, 3, -1, 5]));

function saldosDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    valores = [];
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
    if (mes > 0) valores.push(unPeriodo[i]); 
    }
  return valores;
}
console.log(saldosDeMesesConGanancia([2000, -3, -1, 456]));

function cantidadDeMesesConPerdida(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
    if (mes < 0) cantidad++; 
    }
  return cantidad;
}
console.log(cantidadDeMesesConPerdida([0, -3, -1, 5]));

function naipes(palo){
    let res = [];
    for(let i=1;i<=12;i++){
        if(i!=8 && i!=9){
            res.push(i +" de "+palo);
        }
    }
    return res;
}
console.log(naipes("copas"));

//Escribí una función factorial, la misma debe recibir un número y calcular el factorial del mismo.
//El factorial de un número n es el resultado de multiplicar todos los números enteros positivos menores o iguales que n.

function esEntero(numero){
    if (numero % 1 == 0) {
        return ("Es un numero entero");
    } else {
        return ("Es un numero decimal");
    }
}
console.log(esEntero(1.50));

function factorial(numero){
    let fac=1;
    for(let i=1;i<=numero;i++){
        fac = fac * i;
        }
    return fac;
}
console.log(factorial(4.50));

//Necesitamos una función productoria que reciba un array de números y devuelva su productoria. 
//La productoria es el resultado de multiplicar todos sus elementos entre ellos.
//Por ejemplo, productoria([1, 4, 7]) debe devolver 28, que es 1 * 4 * 7.
function productoria(arreglo){
    let contador = 1;
    for (let i = 0; i < arreglo.length; i++){
        contador = arreglo[i] * contador;
    }
    return contador;
}
console.log(productoria([2, 2, 2, 2]));

//Los árboles utópicos crecen de una forma particular, en dos ciclos:
//Cada primavera duplican su tamaño
//Cada verano crecen un metro
//Si Laura planta un árbol utópico de un metro, al fin del otoño, ¿cuánto medirá de alto después de N ciclos?

//Algunos ejemplos:

//Si N = 0, su altura será 1 metro (no creció nada)
//Si N = 1, su altura será de 2 metros (duplicó su altura en primavera)
//Si N = 2, su altura será de 3 metros (creció un metro más en verano)
//Si N = 3, su altura será de 6 metros (duplicó su altura en la siguiente primavera)
//y así ...
//Escribí la función alturaArbolUtopico, que tome una cantidad de ciclos de crecimiento, y devuelva la altura resultante del árbol de Laura.

function alturaArbolUtopico(ciclo){
    let contador = 1;
    for(let i = 1; i <= ciclo; i++){
        if(i%2==0){
            contador++;
        } else{
            contador = contador *2;
        }
    }
    return contador;
}
console.log(alturaArbolUtopico(1));

//Necesitamos una función masMenos que reciba un array y devuelva otro con los siguientes tres números:

//En la primera posición, la fracción de números que son positivos
//En la segunda posición, la fracción de números que son cero
//En la última posición, la fracción de números que son negativos
//Por ejemplo, masMenos([1, 2, 0, -1]) debería devolver [0.5, 0.25, 0.25], dado que hay 50% de positivos, 25% de ceros, y 25% de negativos.

//Escribí la función masMenos.

function masMenos(array){
    let positivos = 0
    let negativos = 0
    let ceros = 0
    for(let i= 0; i < array.length; i++){
        if(array[i] == 0) ceros = ceros + 1
        else if(array[i] > 0) positivos = positivos + 1
        else negativos = negativos + 1
    }
    let fraccionPositivo = positivos / array.length
    let fraccionNegativo = negativos / array.length
    let fraccionCeros = ceros / array.length
    return [fraccionPositivo,fraccionCeros,fraccionNegativo]
}*/

//Primer ejercicio
/*function sumatoriaBajoImporte(valores) { // cree una funcion llamada "sumatoriabajoimporte" con el parametro "valores" que son ingresados por el usario
    let contadorDeValores = 0; // cree un contador para acumular los valores ingresados
    for (i = 0; i < valores.length; i++) { // creamos un for con la condicion que recorra el array completo y cuente la cantidad de elementos del arreglo
        if ( valores[i] <= 1000 && valores[i] > 0) { // evaluamos las dos condiciones que son si mes es mayor igual a 1000 y mayor a 0 lo guarde en contador
            contadorDeValores += valores[i];// luego sumamos los meses que cumplican con la condicion anterior y finalizamos el retornando el resultado de la misma
        }
    }
    return contadorDeValores;
}
console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));

//Segundo ejercicio
function asientosDisponibles(asiento, personaSolicitante) {//cree una funcion llamada "asientosdiponibles" donde se ingresara un parametro array llamado "aseientos"
// y un parametro llamado "personasolicitan" donde se ingresara el numero del asiento que solicita la persona a comprar a ver si esta disponible
      if (asiento.indexOf(personaSolicitante) != -1) { //cree un if para evaluar si en el array "asiento" se encuentra el valor ingresado del parametro "personasolicitan" 
        //como el metodo indexof va buscar el valor y si el resultado que retorna el metodo es diferente a -1 mostrara felicitaciones
        return ("Felicitaciones, el asiento número " + personaSolicitante + " está disponible"); //de ser cieta la condicion anterior mostrar el mensaje que esta diponible
      } else {
        return ("Lo sentimos, el asiento número " + personaSolicitante + " está ocupado, pero aún quedan " + asiento.length + " asientos disponibles" ); // de lo contrario a la 
//condicion mostrar mensaje no diponible y muestra la cantidad de asientos disponible
      }
    }
console.log(asientosDisponibles([15, 28, 44, 45, 70], 40));

//Tercer ejercicio
function reporteDePasajeros(estacion) { //se crea una funcion y se declara el parametro estacion
    let contador = []; // cree un contador con array vacio donde vamos a guardar los datos de cada estacion y mostrarlos cuando se requieran
    for (let i = 0; i <= estacion; i++) { // cree un for para recorrer las estaciones y luego hacer la operacion matematica que se requiren por cada estacion en base a los valores indicados en el ejercicio
        let pasajeros; //cree una variable de pasajero para almacenar el resultado de la operacion matematica que equivale a la cantidad de pasajeros en determinada estacion
        if (i >= 5) { // abro if para comprobar que el numero de la estacion sea mayor igual a 5 que cuando cambia la condicion de la operacion
            pasajeros = 200 + i * 20 + 20; // esta operacion se cumpliria para la estacion 5 en adelante 
        } else {
            pasajeros = 200 + i * 20; // 0 al 4 estacion se cumple esta sentencia 
        }
        contador.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren"); //inserto y muestro los resultados en el contado concatenando las otras variables
    }
    return contador;
}
console.log(reporteDePasajeros(0)); // ["En la estación 0 hay 200 pasajeros arriba del tren"]
 
console.log(reporteDePasajeros(2)); // ["En la estación 0 hay 200 pasajeros arriba del tren", "En la estación 1 hay 220 pasajeros arriba del tren",
// "En la estación 2 hay 240 pasajeros arriba del tren"]
 
console.log(reporteDePasajeros(4)); // ["En la estación 0 hay 200 pasajeros arriba del tren", "En la estación 1 hay 220 pasajeros arriba del tren",
// "En la estación 2 hay 240 pasajeros arriba del tren", "En la estación 3 hay 260 pasajeros arriba del tren", "En la estación 4 hay 280 pasajeros 
//arriba del tren"]
 
console.log(reporteDePasajeros(5)); // ["En la estación 0 hay 200 pasajeros arriba del tren", "En la estación 1 hay 220 pasajeros arriba del 
//tren", "En la estación 2 hay 240 pasajeros arriba del tren", "En la estación 3 hay 260 pasajeros arriba del tren", "En la estación 4 hay 280 
//pasajeros arriba del tren", "En la estación 5 hay 320 pasajeros arriba del tren"]
 
console.log(reporteDePasajeros(6)); // ["En la estación 0 hay 200 pasajeros arriba del tren", "En la estación 1 hay 220 pasajeros arriba del tren",
// "En la estación 2 hay 240 pasajeros arriba del tren", "En la estación 3 hay 260 pasajeros arriba del tren", "En la estación 4 hay 280 pasajeros 
//arriba del tren", "En la estación 5 hay 320 pasajeros arriba del tren", "En la estación 6 hay 340 pasajeros arriba del tren"]*/

