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

/*Гипотенуза*/
с = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));//c = корень из (a в квадрате + b в квадрате)
/*Катет */
a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));//c = корень из (a в квадрате + b в квадрате)