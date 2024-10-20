import { series } from './data.js'; // Asegúrate que la ruta sea correcta
var tableBody = document.getElementById('series-table');
console.log('Series importadas:', series); // Esto imprime las series en la consola
function renderSeries() {
    series.forEach(function (serie) {
        console.log('Procesando serie:', serie); // Esto imprime cada serie
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        tableBody.appendChild(row);
    });
    console.log('Todas las series se han renderizado.');
}
function calculateSeasonAverage() {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    return Math.floor(totalSeasons / series.length); // Redondear hacia abajo para obtener un entero
}
function renderSeasonAverage() {
    var averageSeasons = calculateSeasonAverage();
    var row = document.createElement('tr');
    row.innerHTML = "\n    <td colspan=\"3\">Season average</td>\n    <td>".concat(averageSeasons, "</td>\n  ");
    tableBody.appendChild(row);
}
renderSeries(); // Renderizar las series primero
renderSeasonAverage(); // Luego renderizar el promedio de temporadas
