var bs = require("browser-sync").create();

bs.init({
  server: true,
  notify: false,
});
let exp = ['*.html', './css/*.css', './js/*.js']
bs.watch(exp).on('change', bs.reload);



/*
  "dependencies": {
    "express": "^4.17.1",
    "express-handlebars": "^4.0.3",
    "handlebars": "^4.7.6",
    "magnific-popup": "^1.1.0",
    "multer": "^1.4.2",
    "mysql": "^2.18.1",
    "normalize.css": "^8.0.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "requirejs": "^2.3.6",
    "slick-carousel": "^1.8.1"
  },
  "devDependencies": {
    "@babel/core": "^7.9.6",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-syntax-class-properties": "^7.8.3",
    "@babel/preset-env": "^7.9.6",
    "@babel/preset-react": "^7.9.4",
    "babelify": "^10.0.0",
    "browser-sync": "^2.26.7",
    "browserify": "^16.5.1",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^7.0.1",
    "gulp-concat": "^2.6.1",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^4.0.2",
    "gulp-sourcemaps": "^2.6.5",
    "gulp-uglify": "^3.0.2",
    "gulp-uglify-es": "^2.0.0",
    "gulp-watch": "^5.0.1",
    "vinyl-buffer": "^1.0.1",
    "vinyl-source-stream": "^2.0.0",
    "nodemon": "^2.0.2"
  },


*/