/*eslint-disable*/
"####---<{ Найти середину }>---####"
//читается как: Середина = начало + половина длинны
let mid = start + (end - start) / 2;


/* Узнать как это рисует круг */
let vertices = 100, lines = [];
for(let i = 0; i <= vertices; i++){
  let point = {
    x: Math.cos(i / vertices * Math.PI * 2),
    y: Math.sin(i / vertices * Math.PI * 2)
  }
  lines.push(point)
}