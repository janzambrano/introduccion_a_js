//lesion 1
document.getElementById('app-from-file-js').innerHTML = 'Hola mundo con archivo js';
console.log(1);


/*lesion 2
let name = prompt ('¿Cual es tu nombre?');
let years = prompt ('¿Cual es tu edad?');
document.getElementById('lesion3').innerHTML = `Bienvenido ${name} tu edad es ${years}`;*/

//variables con "var" "let" "const"
//primera lesion de varibles con "var" el valor puede ser con comillas simples o dobles - las variables no pueden tener numeros por inicio ni carateres especiales al inicio

var nombre = "jan";
console.log(nombre); //muestra solo en la consola

//aca puedo declarar multiples varibles seguidas usando , en vez de ; esto aplica tambien para "let"

var carrito = "libro1",
    carrito2 = "libro2";
console.log(carrito, carrito2);

var segundoNombre = "carlos"; //esto se conoce como CamelCase
console.log(segundoNombre);

var segundo_apellido = "luengo"; //esto se conoce como underscore
console.log(segundo_apellido);

var PrimerApellido = "Zambrano"; //esto se conoce como pascal case
console.log(PrimerApellido);

var producto; //inicializando varible vacia, esto aplica tambien para "let"
producto = "caucho"; //dando un valor a varible vacia, esto aplica tambien para "let"
console.log(producto);

var pais = "italia"; //como se ve con "var" puedo redeclarar el valor de una varible a lo largo del codigo usando "var" al pricipio nuevamente OJO esto no aplica para "let"
var pais = "francia";
console.log(pais);

//variables con "let"
let nombreLet = "pedro";
console.log(nombreLet);

let mascota = "perro"; //como se ve con "let" puedo redeclarar el valor de una varible a lo largo del codigo sin usar "let" al principio de lo contrario da un error diciendo que ya esta declarada en la primera vez que se utilizo la misma
mascota = "gato";
console.log(mascota);

//variables con "const"
// a diferencia de "var" y "let", "const" simple debe tener definido un valor no puede estar vacia ejemplo const herramienta; y tampoco se puede cambiar el valor a lo largo del codigo como las enteriores, recomendable usar si sabemos que este valor no va cambiar
const herramienta = "martillo";
console.log(herramienta);

//concatenar cadenas de texto
mensaje = "JAVA" + "SCRIPT";
console.log(mensaje);

// colocando comillas dentro del texto
mensaje2 = "Y entonces dije \"Buena Suerte\"";
console.log(mensaje2);

//concatenando variables+varibles o variables+texto
let articulo = "televisor LG",
    lema = "el mejor en 4K";
console.log(articulo + " " + lema); //nueva forma
console.log(`${articulo} ${lema}`); //forma antigua

console.log(articulo.concat(' ', 'es el mejor del mercado')); //concatenando usando ".concat", casi no se utiliza

//leer los caracteres de un cadena de texto
let contraseña = "n@t@s";
console.log(contraseña.length); //mostrara el numero de caracteres en la consola que este caso es 5

//hacer un texto mayuscula, solo para cadenas de texto, no para numeros logico daria un error
console.log(articulo.toUpperCase());

//hacer un texto minuscula, solo para cadenas de texto, no para numeros logico daria un error
console.log(articulo.toLocaleLowerCase());

//buscando una palabra en especifico dentro de una cadena de texto
let mensaje4 = "En esto consiste la programacion en JavaScript y tendras los mejores resultados"
console.log(mensaje4.indexOf("JavaScript")); //esto me mostrara en consola la posicion numerica donde comieza la palabra encontrada

console.log(mensaje4.indexOf("HTML")); //mostrara -1 ya que no se encuentra la palabra dentro de la cadena, no muestra null ni false

//mostrando texto en intervalos especificos numerico de una cadena 
console.log(mensaje4.substring(69, 79));

//mostrando texto del final hacia adelante y en intervalos especificos numerico de una cadena como el anterior "substring"
console.log(mensaje4.slice(-43));
console.log(mensaje4.slice(69, 79));

//con "split" podras buscar los espacios en blanco y divide es texto en porciones y los enumera en este caso palabra por palabra como un arreglo y da el valor del conteo del mismo
console.log(mensaje4.split(" "));

let mensaje3 = "Nombre, Apellido, Cedula, ID"
console.log(mensaje3.split(", "));

//remplazando el texto o la palabra de una cadena especificada previamente 
console.log(mensaje3.replace("Cedula", "RUT"));

//con esto puedo validar una cadena de texto previmente especificada, es parecida a "indexOf" pero en vez de mostras -1 mostrara en true o false
console.log(mensaje3.includes("ID")); //muestra en este caso true

console.log(mensaje3.includes("DNI")); //en este caso muestra false

//repetir cantidad de veces que sea especificada una cadena
console.log(herramienta.repeat(10));

//numeros en JavaScript
const numero1 = 30;
const numero2 = 20;
const numero3 = 20.20;
const numero4 = .1020;
const numero5 = -3;

let suma;
let resta;
let multi;
let division;
let residuo;
let pi;

//suma, en todas las operacionanes se puede hacer entre variables o podemos colocar un valor con variale suma = numero1 + 1000;
suma = numero1 + numero2;

console.log(suma);

//resta
resta = numero1 - numero2;

console.log(resta);

//multiplicar
multi = numero1 * numero2;

console.log(multi);

//division
division = numero1 / numero2;

console.log(division);

//modulo que no es mas que el residuo de una division
residuo = numero1 % numero2;

console.log(residuo);

//PI
pi = Math.PI;

console.log(pi);

//redondeo de numero decimales
redondeo1 = Math.round(2.4);
redondeo2 = Math.round(2.6);

console.log(redondeo1);
console.log(redondeo2);

//redondeo hacia arriba con ceil
redondeo1 = Math.ceil(2.4);
redondeo2 = Math.ceil(2.1);

console.log(redondeo1);
console.log(redondeo2);

//redondeo hacia arriba con floor
redondeo1 = Math.floor(2.6);
redondeo2 = Math.floor(2.1);

console.log(redondeo1);
console.log(redondeo2);

//raiz cuadrada de un numero
raiz = Math.sqrt(144);

console.log(raiz);

//numero absoluto
NumeroAbsoluto = Math.abs(numero5);

console.log(NumeroAbsoluto);

//multiplicacion de determinada potencia
potencia = Math.pow(8, 3);

console.log(potencia);

// el numero minimo de entre varios
NumeroMinimo = Math.min(100, 49, 239, 19, 33, 12);

console.log(NumeroMinimo);

// el numero maximo de entre varios
NumeroMaximo = Math.max(100, 49, 239, 19, 33, 12);

console.log(NumeroMaximo);

//crear un numero aleatorio
NumeroAleatorio = Math.random();

console.log(NumeroAleatorio);

//orden de operaciones con y sin parentesis
operacion = (10 + 20 + 34 * 10); //en este caso primero multiplica y luego suma
console.log(operacion);

//orden de operaciones con y sin parentesis
operacion2 = ((10 + 20 + 34) * 10); //en este caso primero realiza la operacion dentro de los parentisis y luego multiplica
console.log(operacion2);

//incrementando el valor de una variable despues de imprimir por segunda vez +1 o un valos especifico
let puntaje = 10;

console.log(puntaje++);
console.log(puntaje++);
console.log(puntaje += 5);
console.log(puntaje += 5);

//incrementando el valor de una variable antes de imprimir
let puntaje2 = 10;

console.log(++puntaje2);
console.log(++puntaje2);
console.log(++puntaje2);
console.log(++puntaje2);


//decrementar el valor de una variable despues de imprimir por segunda vez vez -1 o un valos especifico
let puntaje3 = 50;

console.log(puntaje3--);
console.log(puntaje3--);
console.log(puntaje3 -= 3);
console.log(puntaje3 -= 3);

//decrementar el valor de una variable antes de imprimir
let puntaje4 = 50;

console.log(--puntaje4);
console.log(--puntaje4);
console.log(--puntaje4);
console.log(--puntaje4);

//tipos de datos "string"
let valor

valor = "jan";

console.log(typeof valor);

//tipos de datos "number" todos lo numeros sin comillas
let valor2

valor2 = 20;

console.log(typeof valor2);

//tipos de datos "booleanos" 
let valor3

valor3 = false;

console.log(typeof valor3);

//tipos de datos "null"
let valor4

valor4 = null;

console.log(typeof valor4);

//tipos de datos "undefined"
let valor5

console.log(typeof valor5);

//tipos de datos "Symbol"
valor6 = Symbol("Simbolo");

console.log(typeof valor6);

//tipos de datos "object" que pueden ser un array o objeto
valor7 = [1, 2, 3, 4]; //array

console.log(typeof valor7);

valor8 = {
        name: 'juan',
        id: '001'

    } //obejeto
console.log(typeof valor8);

valor9 = new Date(); //fecha

console.log(typeof valor9);


//operadores de comparacion
const dato1 = 20;
const dato2 = 50;
const dato3 = "20";

console.log(dato1 > dato2);
console.log(dato1 < dato2);

//comparador de igual
console.log(dato1 == dato3); //hace una comparacion de valor pero no discrimina el entre tipo de dato si es string y number

console.log(dato1 === dato3); //hace una comparacion de valor y tambien si es el mismo tipo de dato si es string y number

console.log(dato1 != dato2); //compara si los valores son diferentes, o no igual

//comparando cadenas de texto o letras
console.log("hola" == " hola")

console.log("a" > "b"); //JavaScript interpreta las letras por su rango tomando que A es menor que Z dentro de su posicion en el ABCedario esto aplica para Mayusculas tambien

console.log("C" < "z");

//convertir de string a number
text1 = Number("20");
text2 = Number("20.2343");
text3 = Number("true");
text4 = Number("false");
text5 = Number("null");
text6 = Number("undefined");
text7 = Number("Hola mundo");
text8 = Number([1, 2, 3, 4]);

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);
console.log(text5);
console.log(text6);
console.log(text7);
console.log(text8);

const sifra1 = "50",
    sifra2 = 10,
    sifra3 = "tres";

console.log(sifra1 + sifra2); //como se ve si no se convierte sifra1 al hacer la operacion crea una cadena de texto concatenada

console.log(sifra1 - sifra2); //pero en resta si hace la operacion ya que no considera el signo como una concatenacion

console.log(Number(sifra1) + sifra2); //convierto sifra1 de texto a numero con Number
console.log(parseInt(sifra1) + sifra2); //convierto sifra1 de texto a numero con parseInt

//convirtiendo para ambos casos un text a numero nos dara NaN que es un error
console.log(Number(sifra3));
console.log(parseInt(sifra3));

//convirtiendo numeros con decimales parseInt y parseFloat
numerito1 = parseInt("100");
numerito2 = parseFloat("100");
numerito3 = parseFloat("100.2356");
numerito4 = parseInt("100.2356");

console.log(numerito1);
console.log(numerito3);
console.log(numerito3);
console.log(numerito4);

//toFixed para redondear y reconvertir un numero OJO solo definido numero sin "" puedes eliminar o difinir cuantos decimales puede tener el numero
numerito5 = 1234854;
numerito6 = 2345454.32432091;
numerito7 = 2345454.32432091;
console.log(numerito5.toFixed());
console.log(numerito6.toFixed());
console.log(numerito7.toFixed(5));

//convirtiendo de number a string, se puede convertir booleano y areglos tambien
codigo1 = 90210;
console.log(codigo1.length); //como se ve nos dara undefined porque la variable la reconoce como numero y no puede ejecutar el conteo de los carateres

codigo2 = 90210;
codigo2 = String(codigo2);
console.log(codigo2.length); //aqui si funciona perfectamente

codigo3 = true;
codigo3 = codigo3.toString();
console.log(codigo3.length); //otra forma con toString

//crear arreglos 
const arregloNumeros = [10, 20, 30, 50, 60];
console.log(arregloNumeros);

//Areglos de String (metodo alternativo)
const meses = new Array("Enero", "Febrero", "Marzo", "Abril");
console.log(meses);

//Arreglo mezclado
const mezclado = ["hola", 20, true, null, false, undefined];
console.log(mezclado);

//comprobar si es un arreglo
console.log(Array.isArray(meses));

//acceder a partes del arreglo por el index de cada uno de sus componenetes
console.log(meses[3]); //el index de abril es el numero 3 ya que todos los arreglos comienzan en 0

//encontrar posicion elemento en el arreglo, OJO tiene que estar escrito tal cual como este en el arreglo (Mayusculas y minuscalas discrimina) si no lo consigue da -1
console.log(meses.indexOf("Abril"));

//agregar un elemento nuevo al arreglo
meses[4] = "Mayo"; //esta es una manera
console.log(meses[4]);
console.log(meses);

meses.push("Junio"); // esta es otra manera, sin necesidad de saber la posicion lo agrega al final del arreglo
console.log(meses[5]);
console.log(meses);

//agregar un elemento al inicio del arreglo
meses.unshift("Mes 0");
console.log(meses[0]);
console.log(meses);

//eliminar un elemento del arreglo
meses.pop(); //este elimina el ultimo elemento
console.log(meses);

//eliminar un elemento del arreglo
meses.shift(); //este elimina el primer elemento
console.log(meses);

//eliminar un elemento especifico del arreglo con intervalos
meses.splice(0, 1); //quita el elemento del index numero 2 y 1 seria cuantos hacia adelante tomar
console.log(meses);

//revertir un arreglo, se muestra a desplegar en la consola
meses.reverse();

//unir dos o más arreglos
let arreglo1 = [1, 2, 3],
    arreglo2 = [6, 7, 8];

console.log(arreglo1.concat(arreglo2));

//ordenar un arreglo en orden alfabetico
const frutasLegunbres = ["Platano", "Mango", "Zanahorias", "Naranja"];
frutasLegunbres.sort();
console.log(frutasLegunbres);

//ordenar numeros
arregloNumerico = [3, 50, 2, 55, 10, 90, 20, 12, 70, 13, 8, 4];
arregloNumerico.sort(); //muestra lo numeros ordenados por lotes de serie no secuencialmente 
console.log(arregloNumerico);

arregloNumerico.sort(function(x, y) {
    return x - y;
}); //para ordenar correctamente los numeros no como la anterior creamos una funcion como la siguiente, acedente 
console.log(arregloNumerico);

arregloNumerico.sort(function(x, y) {
    return y - x;
}); //para ordenar correctamente los numeros no como la anterior creamos una funcion como la siguiente, decendente, simplmente cambiando la posicion del return
console.log(arregloNumerico);

//un arreglo definido como const no puede ser modificado completo solo sus elementos individualmente como se muestra
const arregloValor = [1, 2, 3];
console.log(arregloValor);
// Esto no se puede hacer porque da error
//arregloValor = [5,6,2];
arregloValor[0] = 4; //como se ve estamos modificando el valor del indice 0
console.log(arregloValor);

//Crear objetos, ojo podemos colocar cualquier valor (texto, numerico, booleano, undefined, array, incluso podemos agregar un objeto dentro de otro y podemos agregar una funcion o metodo dentro)
const persona = {
    nombre: "Eduardo",
    apellido: "Paz",
    profesion: "Informatica",
    email: "edpaz@correo.com",
    edad: 36,
    musica: ["Rock", "Salsa", "Gaitas"], //los metodos anteiores de array puden utlizarce dentro del objeto
    residencia: {
        pais: "Venezuela",
        ciudad: "Maracaibo",
        estado: "Zulia"
    },
    anoNacimiento: function() {
        return new Date().getFullYear() - this.edad; //aca puedo llamar con "this" a un valos dentro del objeto para calcular la funcion de año de nacimiento
    }
}

console.log(persona);

//mostrar un valor del objecto
console.log(persona.apellido);

console.log(persona.edad);

console.log(persona.musica);

console.log(persona.musica[2]); //mostando el valor musica con la posicion 2 del arreglo

console.log(persona.residencia); //mostrando el objeto que esta dentro de otro

console.log(persona.residencia.estado); //un valor de un objeto dentro de otro
console.log(persona["residencia"]["pais"]); //otra forma

console.log(persona.anoNacimiento()); //motrando el valor calculado de la funcion o metodo dentro del objeto


// areglos con objetos internamente
const autos = [
    { modelo: "Chevrolet", color: "Negro" },
    { modelo: "Fiat", color: "Azul" },
    { modelo: "Jeep", color: "Marron" },
];

console.log(autos);

//imprimiendo por separado el valor de un objeto dentro del recorrido en una matriz con for
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

//imprimiendo una variable especifica "modelo"
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo);
}

//armando impresion de variables objeto dentro de una matriz
for (let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} ${autos[i].color}`);
}

//modificando los valores de una matriz dentro de un objeto
autos[0].modelo = "Audi";

console.log(autos);

//funciones en JavaScript
//function declaration aqui solo estamos declarando
function saludar() {
    console.log("Hola Jan");
}

//y aqui se manda a llamar la funcion para su uso
saludar();

//agregando argumentos a una funcion y se le pueden dar distintos valores y puede ser llamadas X cantidad de veces cambiando ese valor
function saludar2(nombre2) {
    console.log(`Hola ${nombre2}`);
}

saludar2("Carlos");
saludar2("Luis");
saludar2("Pedro");

//funcion de sumar que imprimer un valor
function sumar2(a, b) {
    console.log(a + b);
}

sumar2(50, 40);
sumar2(30, 20);

//funcion de sumar que retorna un valor
function sumar3(a, b) {
    return a + b; //operador que regresa lo que la funcion haga
}
let operacion3;

operacion3 = sumar3(60, 240);

console.log(operacion3);

//otro ejemplo de return
function saludar3(nombre) {
    if (typeof nombre === "undefined") { nombre = "Visitante" } //esto solo funcionaria si saludos esta vacio mostrara Visitante esta es la fomra antigua
    return `Hola ${nombre}`;
}

let saludos;

saludos = saludar3("Cesar"); // declarando valor

console.log(saludos);

//nueva forma de que sustituye la anterior por if, igual si esta vacia mostrara Visitante
function saludar4(nombre = "Visistante") {
    return `Hola ${nombre}`;
}

let saludos2;

saludos2 = saludar3(); // declarando valor

console.log(saludos2);

//function Expression
const suma4 = function(a = 10, b = 5) {
    return a + b;
}

console.log(suma4(30, 45));
console.log(suma4(30));

//con string
const saludar5 = function(nombre3 = "visitantes") {
    return `Hola ${nombre3}`
}

console.log(saludar5("Chicho"));

//funciones de IIFE o funciones que se declaran y invocan inmediatamente
(function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
})("JavaScript");

//funciones de metodos de propiedad, se ponen dentro de un objeto y esto se conoce como metodo
const musica2 = {
        reproducir: function(id) {
            console.log(`Reproduciendo canción id ${id}`);
        },
        pausar: function() {
            console.log("Música en Pausa");
        }
    }
    //los metodos tambien pueden guardarse / crearse fuera del objeto
musica2.borrar = function(id) {
    console.log(`Borrar la canción con el ID: ${id}`);
}

musica2.reproducir(30);
musica2.pausar();
musica2.borrar(2);

//manejo de errores con Try Catch
function obtenerClientes() {
    console.log('Descargando...');

    setTimeout(function() {
        console.log('Completado')
    }, 1); //segundos de retraso
}

//funcionInecistenete(); //aca el ejemplo para que aplique sin Try Catch

try {
    funcionInecistenete();
} catch (error) {
    console.log(error);
}

obtenerClientes(); //es indiferente si se coloca antes o despues de la declaracion, OJO si yo tengo una funcion que no existe o con error detiene toda las funciones del programa para esto esta el Try Catch

try {
    funcionInecistenete();
} catch (error) {
    console.log(error);
} finally {
    console.log('Ejecutar exista o no error'); //con este ejecutara la funcion exita o no error simpre
}


//fechas en JavaScript
//en JavaScript extiste un objeto llamado Date
const diaHoy = new Date();

console.log(diaHoy);

//fecha en especifico con mes, dia y año
let navidad2019 = new Date('12-24-2019');

console.log(navidad2019);

//metodos para acceder a los datos de fechas en forma separada
//para mes
fecha = diaHoy.getMonth(); //ojo tomar en cuenta que conteo desde 0 por eso simpre sumar 1 al valor arojado y sera el mes correcto

console.log(fecha);

//para dia se pueden utlizar estas dos opciones
//let fecha2 = diaHoy.getDate();
let fecha2 = diaHoy.getDay();

console.log(fecha2);

//para año
let fecha3 = diaHoy.getFullYear();

console.log(fecha3);

//para minutos
let = fecha4 = diaHoy.getMinutes();

console.log(fecha4);

//para hora
let = fecha5 = diaHoy.getHours();

console.log(fecha5);

//milisegundos desde 1970
let fecha6 = diaHoy.getTime();

console.log(fecha6);

//agregando o sobreescribiendo un valor de fecha, esto aplica para todo lo anterior
fecha7 = diaHoy.getFullYear();
fecha7 = diaHoy.setFullYear(2015);
fecha7 = diaHoy.getFullYear();

console.log(fecha7);


//estructuras de control if else elseif
const edad1 = 18;
const edad2 = 16;
//con edad igual o mayor 
if (edad1 >= 18) {
    console.log('Si puedes entrar al sitio')
} else {
    console.log('No puedes entrar al sitio')
}

//con edad menor
if (edad2 >= 18) {
    console.log('Si puedes entrar al sitio')
} else {
    console.log('No puedes entrar al sitio')
}

//comparar que una variable tiene un valor
let puntajeJuego1 = "1000";
let puntajeJuego2;
//con valor 
if (puntajeJuego1) {
    console.log(`El puntaje alcanzado es de ${puntajeJuego1}`);
} else {
    console.log(`No tienes puntaje`);
}
//sin valor
if (puntajeJuego2) {
    console.log(`El puntaje alcanzado es de ${puntajeJuego1}`);
} else {
    console.log(`No tienes puntaje`);
}

//otro ejemplo sin llaves (no recomendable por estetica)
let efectivo = 200;
let totalcarrito = 300;

if (efectivo > totalcarrito)
    console.log('Pago Correcto');
else
    console.log('Fondos Insuficientes');


// else if
let horaDia = 22;
// comparando con Y && este es mas estricto y revisa ambas opciones
if (horaDia > 0 && horaDia <= 11) {
    console.log("Buenos Dias");
} else if (horaDia > 10 && horaDia <= 17) {
    console.log("Buenas tardes");
} else if (horaDia > 17 && horaDia <= 24) {
    console.log("Buenas noches");
} else {
    console.log("No es una hora valida");
}

// comparando con or || menos estricto revisa por separado
let efectivo2 = 600;
let credito = 300;
let disponibleCE = efectivo2 + credito;
let totalcarrito2 = 500;

if (totalcarrito2 < efectivo2 || totalcarrito < credito || totalcarrito < disponibleCE) {
    console.log("Puedes Pagar");
} else {
    console.log("No puedes pagar");
}

// ternario o if else en una sola linea
const login = false;

console.log(login === true ? "Si se logeo" : "No se logeo");


// Switch comprabando variables
const metododePago = "efectivo";

switch (metododePago) {
    case "efectivo":
        console.log(`Estas pagando con ${metododePago}`);
        break;
    case "debito":
        console.log(`Estas pagando con ${metododePago}`);
        break;
    case "credito":
        console.log(`Estas pagando con ${metododePago}`);
        break;
    default:
        console.log("este metodo no esta disponible");
        break;
}

//otro caso de uso para switch
let mesPrint

switch (new Date().getMonth()) {
    case "0":
        mesPrint = "Enero";
        break;
    case 1:
        mesPrint = "Febrero";
        break;
    case 2:
        mesPrint = "Marzo";
        break;
    case 3:
        mesPrint = "Abril";
        break;
    case 4:
        mesPrint = "Mayo";
        break;
    case 5:
        mesPrint = "Junio";
        break;
    case 6:
        mesPrint = "Julio";
        break;
    case 7:
        mesPrint = "Agosto";
        break;
    case 8:
        mesPrint = "Septiembre";
        break;
    case 9:
        mesPrint = "Octubre";
        break;
    case 10:
        mesPrint = "Nobiembre";
        break;
    case 11:
        mesPrint = "Diciembre";
        break;
}

console.log(`El mes actual es ${mesPrint}`);



//For Loops son con repeticion de ciclos hasta que una condicion x se cumpla
for (let i = 0; i <= 10; i++) {
    console.log(`Numero ${i}`);
}

// lo mismo pero agegando un if dentro
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("Voy por el numero 5");
        continue; // esto hace que no se imprima el valor o podriamos utlizar break para que para el loops
    }
    console.log(`Numero ${i}`);
}

//otro ejemplo
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`El Numero ${i} es Par`);
    } else {
        console.log(`El Numero ${i} es Impar`);
    }
}

//oto ejemplo con arreglo
const arregloProducto = ['Camisa', 'Juguete', 'Franela', 'Perfume'];

for (let ip = 0; ip < arregloProducto.length; ip++) {
    console.log(`Tu producto ${arregloProducto[ip]} fue agregado`);
}

//while revisando que la condicion se cumpla y corre el codico
let i = 0;

while (i <= 10) {
    console.log(`Numero ${i}`);
    i++;
}

// otro ejemplo
let i2 = 0;

while (i2 < 10) {
    if (i2 === 5) {
        console.log("Cinco");
        i2++;
        //continue;
        break;
    }
    console.log(`Numero ${i2}`);
    i2++;
}

// con arreglo
const musica3 = ['titulo 1', 'titulo 2', 'titulo 3'];

let i3 = 0;

while (i3 < musica3.length) {
    console.log(`Cancion agregada a lista: ${musica3[i3]}`);
    i3++;
}

//do while corre el codigo sin inportar que la condicion se cumpla asi solo una vez
let i5 = 0;

do {
    console.log(`Numero ${i5}`);
    i5++;
} while (i5 <= 10);