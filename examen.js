//Primer ejercicio
function sumatoriaBajoImporte(valores) { 
    let sumaValores = 0;
    for (i = 0; i < valores.length; i++) {
        let mes = valores[i];
        if ( mes <= 1000 && mes > 0) {
            sumaValores += mes;
        }
    }
    return sumaValores;
}
console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));

//Segundo ejercicio
function asientosDisponibles(asientos, asientoDePersonaSolicitante) {
      if (asientos.indexOf(asientoDePersonaSolicitante) != -1) {
        return ("Felicitaciones, el asiento número " + asientoDePersonaSolicitante + " está disponible");
      } else {
        return ("Lo sentimos, el asiento número " + asientoDePersonaSolicitante + " está ocupado, pero aún quedan " + asientos.length + " asientos disponibles" );
      }
    }

console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));

//Tercer ejercicio
function reporteDePasajeros(estacion) {
    let contador = [];
    for (let i = 0; i <= estacion; i++) {
        let cantidadDePasajeros;
        if (i >= 5) {
            cantidadDePasajeros = 200 + i * 20 + 20;
        } else {
            cantidadDePasajeros = 200 + i * 20;
        }
        contador.push("En la estación " + i + " hay " + cantidadDePasajeros + " pasajeros arriba del tren");
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
//arriba del tren", "En la estación 5 hay 320 pasajeros arriba del tren", "En la estación 6 hay 340 pasajeros arriba del tren"]