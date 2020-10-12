/* 
  Если возникает вопрос зачем нужен browser-sync если есть плагин Live Server, то здесь ответ только один это подключение
  к серверу дополнительно с разных устройств.

После глобальной установки browser-sync можно пойти путём запуска через консоль по хардкору
 browser-sync start --server --files "css/*.css" в конце файлы какие хотим отслеживать
*/
let bs =  require('browser-sync').create();

/* Минимальный набор. Слежка от места положения файла. Если запуск корневого файла можно не указывать ./
   Изменение путей требует перезапустить сервер. Запускается обычным node файл_запуска.js/. 
  bs.init({
    server: true,
  });
  let exp = ['*.html', 'css/*.css', 'js/*.js']
  bs.watch(exp).on('change', bs.reload);
*/

bs.init({
  server: { 
    baseDir: "/",
    directory: false, // показывает список файлов 
    //index: "/React/index.html",//не работает как ожидалось. ниже параметр startPath
    serveStaticOptions: {
      extensions: ["html"] //можно указать какие расширения смотреть 
    }
  },
  watch: true,
  files: [
    //можно так указать места
    'app/**/**/*.html', 
    'app/Lesson/**/*.php',
    'app/js/**/*.js',
    //можно детальней настроить
    {
      match: ['**/**.scss'],
      fn: (event, file) => scssCSS(file) 
    },
  ],
  online: true,//при online транслирует в сеть. с гаджетов можно заходить на сайт 
  open: 'external',//Local, External - что отображать в строке URL. В Консоли есть выбор
  notify: false, //скрывает постоянное всплытие bs: Connected
  scrollProportionally: false,//убирает постоянный сброс к верху сайта при обновлении
  port: 8080, 
 
  //browser: ["google chrome", "firefox"]//какие браузеры открывать
  startPath: "app/public/index.html" //можно указать точное местоположение открываемого файла

});


/* */
bs.reload("*.html")//метод просто 1 раз перезагружает. какие файлы перезагружать