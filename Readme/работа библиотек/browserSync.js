let bs =  require('browser-sync').create();
//в gulp

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

bs.reload("*.html")//какие файлы перезагружать