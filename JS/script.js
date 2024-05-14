// script.js

// Array para almacenar los eventos de los ATMs
var eventosATM = [
    { fecha: '2024-05-01', zona: 'Zona A', atm: 'ATM 1', evento: 'Retiro de efectivo', Resultado: 'Fallido' },
    { fecha: '2024-05-01', zona: 'Zona B', atm: 'ATM 2', evento: 'Retiro de efectivo', Resultado: 'Exitoso' },
    { fecha: '2024-05-02', zona: 'Zona A', atm: 'ATM 1', evento: 'Consulta de saldo' , Resultado: 'Exitoso' },
    { fecha: '2024-05-02', zona: 'Zona B', atm: 'ATM 2', evento: 'Retiro de efectivo', Resultado: 'Exitoso' },
    { fecha: '2024-05-03', zona: 'Zona C', atm: 'ATM 3', evento: 'Depósito de efectivo', Resultado: 'Exitoso' },
    { fecha: '2024-05-03', zona: 'Zona A', atm: 'ATM 1', evento: 'Retiro de efectivo', Resultado: 'Exitoso' },
    { fecha: '2024-05-04', zona: 'Zona B', atm: 'ATM 2', evento: 'Consulta de saldo' , Resultado: 'Exitoso' },
    { fecha: '2024-05-04', zona: 'Zona C', atm: 'ATM 3', evento: 'Depósito de efectivo', Resultado: 'Exitoso' },
    { fecha: '2024-05-05', zona: 'Zona A', atm: 'ATM 1', evento: 'Retiro de efectivo', Resultado: 'Fallido' },
    { fecha: '2024-05-05', zona: 'Zona B', atm: 'ATM 2', evento: 'Depósito de efectivo', Resultado: 'Exitoso' },
    { fecha: '2024-05-06', zona: 'Zona C', atm: 'ATM 3', evento: 'Retiro de efectivo', Resultado: 'Exitoso' },
    { fecha: '2024-05-06', zona: 'Zona A', atm: 'ATM 1', evento: 'Consulta de saldo' , Resultado: 'Exitoso' },
    { fecha: '2024-05-07', zona: 'Zona B', atm: 'ATM 2', evento: 'Retiro de efectivo', Resultado: 'Fallido' },
    { fecha: '2024-05-07', zona: 'Zona C', atm: 'ATM 3', evento: 'Depósito de efectivo', Resultado: 'Exitoso' },
    { fecha: '2024-05-08', zona: 'Zona A', atm: 'ATM 1', evento: 'Retiro de efectivo', Resultado: 'Exitoso' },
    { fecha: '2024-05-08', zona: 'Zona B', atm: 'ATM 2', evento: 'Consulta de saldo' , Resultado: 'Exitoso' },
    // Agrega más eventos según sea necesario
];


// Mostrar todos los eventos por defecto al cargar la página
searchEvents();

function searchEvents() {
    // Obtener los valores de entrada
    var date = document.getElementById("date-input").value;
    var zone = document.getElementById("zone-input").value.toLowerCase();
    var atm = document.getElementById("atm-input").value.toLowerCase();
    var resultado = document.getElementById("result-input").value.toLowerCase(); // Obtener el valor del select de resultados

    // Filtrar eventos basados en los valores de entrada y el resultado seleccionado
    var resultados = eventosATM.filter(function(evento) {
        return (!date || evento.fecha === date) && (!zone || evento.zona.toLowerCase().includes(zone)) && (!atm || evento.atm.toLowerCase().includes(atm))
            && (!resultado || evento.Resultado.toLowerCase() === resultado); // Filtrar también por el resultado seleccionado
    });

    // Mostrar los resultados en la tabla
    displayResults(resultados);
}


function displayResults(resultados) {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Limpiar resultados anteriores

    if (resultados.length === 0) {
        resultsDiv.innerHTML = "<p>No se encontraron eventos.</p>";
        return;
    }

    // Crear una tabla para mostrar los resultados
    var table = "<table class='table'><thead><tr><th>Fecha</th><th>Zona</th><th>ATM</th><th>Evento</th><th>Resultado</th></tr></thead><tbody>";
    resultados.forEach(function(evento) {
        table += "<tr><td>" + evento.fecha + "</td><td>" + evento.zona + "</td><td>" + evento.atm + "</td><td>" + evento.evento + "</td><td>" + evento.Resultado + "</td></tr>";
    });
    table += "</tbody></table>";

    // Agregar la tabla al contenedor de resultados
    resultsDiv.innerHTML = table;
}
