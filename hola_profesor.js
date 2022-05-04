/ ¡Hola Mundo desde Digital House!
let saludo = "¡Hola Mundo desde Argentina!";
// console.log(saludo);
// Variables
// Es un espacio de memoria donde se almacena un datos que luego podemos reutilizar
// Existen tres formas de declararlas, con var, let y const
// Pueden ser locales o globales
// Se le asigna un valor con el operador de asignación
// Tienen algunas reglas para nombrarla
// Puede almacenar información en distintos tipos de dato
// var unaVariable; // Declaración de una variable
var unaVariable = "algún string"; // Declaración y asignación
// console.log(unaVariable); // muestra algún string
unaVariable = "otro string";
// unaVariable = 14;
// console.log(unaVariable); // muestra otro string
// Identificadores
// No pueden contener espacios
// No podemos utilizar ñ Ñ ó Ó
// No debemos iniciar los nombre con mayúscula
// No podemos iniciarlo con un número
// Caracteres de a-z A-Z 0-9 $ _
// Debe ser representativo
// Camel Case
var nombreApellido;
// Snake Case
var nombre_apellido;
// Kebab Case
// var nombre-apellido;
// Var vs Let
// var es siempre global y let puede ser global o local
let nombre = "Facu Erbin"
{
    let nombre = "Facu";
    // console.log(nombre);
}
{
}
{
    let nombre = "Erbin";
}
// Tipos de dato
// String
// Si está entre comillas es un string
// console.log('Facu "Erbin"');
// Number
// console.log(10.5);
// Booleano
// console.log(true);
// console.log(undefined, NaN)
// console.log("a" - 20);
// Operadores
// Aritméticos
// + - * / %
let numero = 118;
// console.log(numero % 2);
// Potencia
// console.log(3 ** 3)
// Incremento y Decremento
numero = 0;
numero = numero - 1;
numero --;
// Asignación y suma +=
numero = 10;
numero = numero + 5;
numero += 5;
// console.log(numero);
// Comparación
numero = 10;
// Simple == !=
// Solo considera el valor
// console.log(numero != "10");
// Estricta === !==
// Considera el valor y tipo de dato
// console.log(numero !== "10");
// console.log( true != undefined);
// < > <= >=
// console.log(numero < 0);
// Concatenación
// Nos permite unir dos strings
nombre = "Facu";
let apellido = "Erbin";
// console.log(10 + 10 + nombre + " " + apellido + (10 + 10));
// console.log( 2 + 3 * 5)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Funciones
// Un bloque de código que se define una vez y se puede reutilizar todas las veces necesarias
// Se declara con la palabra function
// Pueden ser declaradas o expresadas
// Las expresadas pueden utilizarse solamente después de haberlas declarado
// Reciben valores por parámetro
// Retornan mediante la palabra return un solo valor
// Declaradas
// Definición
// console.log(sumar(10, 30, 100));
// Parámetros: son las variables por donde vamos a recibir la información de nuestra función
function sumar (numeroA, numeroB, numeroC = 0) {
    return (numeroA + numeroB + numeroC);
    // console.log("El numeroA vale " + numeroA )
}
// Expresadas
let restar = function (numeroA, numeroB) {
    let resultado = numeroA - numeroB;
    return resultado;
}
//console.log(restar(100, 40));
// Invocación
let resultadoSuma = sumar(20 ,30);
//console.log("El resultado fue " + resultadoSuma);
//console.log(sumar(100, 300));
// Saludar
// Valores por defecto
function saludar (nombre = "usuario", apellido = "anónimo") {
    return "Hola " + nombre + " " + apellido;
}
// console.log( saludar() );
// console.log( saludar("Facu") );
// console.log( saludar("Facu", "Erbin") );
// Operadores Lógicos
// AND Y Conjunción Lógica &&
/**
 * true && true => true
 * true && false => false
 * false && false => false
 */
numero = -10;
// console.log(numero > 0 && numero < 100)
// OR O Disyunción Lógica ||
/**
 * true || true => true
 * true || false => true
 * false || false => false
 */
// console.log(numero > 0 || numero === -1);
// Not Negación !
/**
 * ! true => false
 * ! false => true
 */
let dia = "Martes";
// console.log(! (dia === "Sábado" || dia === "Domingo"));
// console.log( dia !== "Sábado" && dia !== "Domingo");
function triple (numero) {
    return numero * 3;
}
function tripleDeLaSuma(numero3, numero4) {
    let resultadoDeSuma = sumar(numero3, numero4);
    return triple( resultadoDeSuma );
}
// console.log(tripleDeLaSuma(2,3))
// Condicionales - if
// Tomar decisiones
dia = "Sábado"
if (dia !== "Sábado" && dia !== "Domingo") {
    //console.log("Hoy es día de semana");
} else if (dia === "Sábado") {
    //console.log("Hoy es día de películas");
} else {
    //console.log("Hoy se come asado");
}
function filosofoHipster (profesion, nacionalidad, cantKm) {
    // return (nacionalidad === "Argentina") && (profesion === "Músico") && (cantKm > 2);
    if ( (nacionalidad === "Argentina") && (profesion === "Músico") && (cantKm > 2) ) {
        return "Es un filosofo hipster";
    } else {
        return "No es un filosofo hipster";
    }
}
// console.log(filosofoHipster("Músico", "Argentina", 2));


// Clase en vivo 2
// Parámetros: son las variables por donde recibe información la función
function escribirCartelito(titulo, nombre, apellido) {
    return titulo + " " + nombre + " " + apellido;
    // console.log("Esto no se ve")
  }
  let resultadoCartelito = escribirCartelito("Ing", "Facu", "Erbin");
  // console.log(resultadoCartelito)
  // console.log(! 2)
  function esNumeroDeLaSuerte(numero) {
    return numero > 0 && (numero % 2 === 0 || numero % 3 === 0) && numero !== 15;
  }
  // console.log(esNumeroDeLaSuerte(-21))
  function puedeSubirse(altura, compania, tieneAfeccionCardiaca) {
    if (
      tieneAfeccionCardiaca === false &&
      (altura >= 1.5 || (altura >= 1.2 && compania === true))
    ) {
      return true;
    } else {
      return false;
    }
    // ! tieneAfeccionCardiaca
    // compania
  }
  // Arrays
  // Es como una variable que puede almacenar varios datos
  // Tiene varias posiciones
  // Es una lista de datos que se ubican por su indice
  // El indice comienza siempre en 0
  // Podemos almacenar varios tipos de datos
  // Se pueden recuperar los datos
  // Tienen métodos y propiedas
  // Es un tipo de dato
  // Si está entre corchetes es un array
  let b = "Facu";
  let unaVariable = ["a", b, "c", 1, 2, 3, true, ["Rojo", "Azul", "Amarillo"]];
  b = "Erbin";
  unaVariable[2] = "f";
  // console.log(unaVariable[7][2]);
  // Métodos
  // Es una función propia de un objeto
  // .length
  // Te indica la cantidad de elementos que tiene el array
  // Es una propiedad (es una variable propia de un objeto)
  // console.log(unaVariable[7].length);
  // .push()
  // Te permite agregar elementos nuevos al array
  // Los agrega siempre al final del array
  let colores = ["Rojo", "Azul", "Amarillo"];
  colores[3] = ["Naranja", "Violeta"];
  //colores[3] = "Violeta";
  let resultadoPush = colores.push("Gris", "Verde");
  // console.log(resultadoPush)
  // .pop()
  // Te elimina el último elemento del array
  // Siempre borra el último y solamente el último
  // No necesita argumentos y te retorna el elemento que elimina
  // console.log(colores);
  let resultadoPop = colores.pop();
  // console.log(resultadoPop);
  // .indexOf()
  colores.push("Verde", "Verde", "Verde");
  // console.log(colores);
  //console.log(colores.indexOf("Azul"));
  function contiene(unArray, unNumero) {
    return unArray.indexOf(unNumero) >= 0;
  }
  // console.log(contiene([1,2,3,4,5],51))
  // Ciclos for
  // Es una forma de repetir código
  // Termina cuando se deja de cumplir la condición
  // Se va modificando la variable del for
  // Consta de tres sentencias
  // En algún momento tiene que parar
  // Sentencia
  // Inicio: declarar una variable y darle un valor inicial
  // Condicion: Mientras se cumpla la condición, se sigue entrando al for
  // Modificador: Va cambiando el valor de la variable del for para que en algún momento se deje de cumplir la condición
  // Para incrementar en 1 podemos colocar vuelta ++ o vuelta += 1 o vuelta = vuelta + 1
  for (let vuelta = 10; vuelta >= 1; vuelta--) {
    // console.log("Estamos dando la vuelta " + vuelta);
    // if (vuelta === 5) {
    //     break;
    // }
  }
  // console.log("después del for")
  function pasandoPorLosPares() {
    // i= i + 2 es lo mismo que i += 2
    for (let i = 0; i <= 6; i += 2) {
      console.log("acá i tiene el valor de " + i);
    }
  }
  // pasandoPorLosPares();
  // Arrays y ciclos
  // Sumatoria
  // Recibe un conjunto de números y me retorna la suma de todos estos números
  // Recibe un array de números
  // Retorna un solo número
  // suma = suma + numeros[0]
  // suma = suma  + numeros[1]
  // suma = suma  + numeros[2]
  // suma = suma  + numeros[3]
  function sumatoria(numeros) {
    // Acumulador
    // Es una variable que usamos para operar sobre un conjunto de datos
    let acumulador = 0; // Se declara antes del for y se le da un valor inicial
    // El valor incial debe ser neutro, si sumamos 0, si multiplicamos
    // 1, o podemos tener "" o []
    for (let indice = 0; indice < numeros.length; indice++) {
      acumulador = acumulador + numeros[indice]; // Se usa dentro del for
      // acumulador += numeros[indice] es lo mismo que la linea 132
      // console.log(indice, numeros[indice], acumulador);
    }
    // Se retorna después del for
    return acumulador;
  }
  // console.log(sumatoria([10,30,60,100, 200]))
  // console.log(sumatoria([20,30,70,300,500,120,230,105, 240]))
  // Retorna un array, el primer elemento es la cantidad y el segundo la sumatoria
  function cantidadYSumatoriaDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    let suma = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
      // Tenemos condiciones ¿? => Sí, queremos las ganancias
      if (unPeriodo[i] > 0) {
        // Aquí encontramos una ganancia
        cantidad++;
      }
      suma = suma + unPeriodo[i];
    }
    return [cantidad, suma];
  }
  //console.log(cantidadYSumatoriaDeMesesConGanancia([100,200,-500,600,1000,-200,600,500]))
  // indiceDe
  // Nos retorna los indices en que se encuentra un elemento
  function indiceDe (unArray, elementoBuscado) {
      // Necesitamos un acumulador ¿? => Sí, necesitamos un array para acumular los indices
      // Tener en cuenta que el acumulador se usa para trabajar sobre un conjunto
      // Es importante fijarse que se debe retornar
      let resultado = [];
      // Qué vamos a recorrer ¿? =>  El array unArray
      for (let i = 0; i < unArray.length; i++) {
          // Tenemos condiciones ¿? => Sí, queremos filtrar el elemento buscado
          if (elementoBuscado === unArray[i]) {
              // Aquí encontré el elemento buscado
              resultado.push(i);
          }
      }
      return resultado; // retornamos después del for
  }
  // console.log(indiceDe([1,2,3,2,34,5,6,4,2,4,5,6,2,4,5,3,45,2,4,2], 4))
  let resultadoIndiceDe =indiceDe([1,2,3,2,34,5,6,4,2,4,5,6,2,4,5,3,45,2,4,2], 3);
  console.log( resultadoIndiceDe.length );