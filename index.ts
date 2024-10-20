
import { series } from './data.js'; // Asegúrate que la ruta sea correcta
import { Serie } from './serie.js'; // Asegúrate que la ruta sea correcta

const tableBody: HTMLElement = document.getElementById('series-table')!;

console.log('Series importadas:', series); // Esto imprime las series en la consola

function renderSeries(): void {
  series.forEach(serie => {
    console.log('Procesando serie:', serie); // Esto imprime cada serie

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tableBody.appendChild(row);
  });

  console.log('Todas las series se han renderizado.');
}

function calculateSeasonAverage(): number {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  return Math.floor(totalSeasons / series.length); // Redondear hacia abajo para obtener un entero
}

function 
renderSeasonAverage(): void {
  const averageSeasons = calculateSeasonAverage();
  const row = document.createElement('tr');
  row.innerHTML = `
    <td colspan="3">Season average</td>
    <td>${averageSeasons}</td>
  `;
  tableBody.appendChild(row);
}

renderSeries(); // Renderizar las series primero
renderSeasonAverage(); // Luego renderizar el promedio de temporadas

