(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
  пока не знаю насколько хорош такой способ подключения. Не совсем понятно, нужно ли в bundle 
  тянуть всю библиотеку bootstrap и jquery и совершать это при каждой перезагрузке страницы? да ещё и
  ужимать? Наверно так не делают.

  Варианты с подключением через CDN не очень т.к. лишние запросы к серверу тормозят загрузку сайта.
  
*/
// import $ from "../../../node_modules/jquery/dist/jquery.slim";
// import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap';
"use strict";

},{}],2:[function(require,module,exports){
//Слайдер зависит от flexBox
// export default function multiItemSlider (selector, config) {
//   let
//     mainElement = document.querySelector(selector),// основный элемент блока. Нужно это что бы поиск был от него, а не где-то на сайте 
//     sliderItemAll = mainElement.querySelectorAll('.slider__item'),
//     sliderBtnLeft = mainElement.querySelector('.slider__btn--left'), // кнопка "LEFT"
//     sliderBtnRight = mainElement.querySelector('.slider__btn--right'), // кнопка "RIGHT"
//     positionItem = 1, // позиция левого активного элемента
//     count = 0;
//   //Этап 1
//   [sliderBtnLeft, sliderBtnRight].forEach((item) => item.addEventListener('click', btnStep))
//   //Этап 2
//   function btnStep(e){
//     if(e.target === sliderBtnRight){
//       if(positionItem < sliderItemAll.length){
//         count = count - 100
//         positionItem++
//       }else{
//         positionItem = 1;
//         count = 0;
//       } 
//     }
//     if(e.target === sliderBtnLeft){
//       if(positionItem > 1 && positionItem <= sliderItemAll.length){
//         count = count + 100
//         positionItem--
//       }else{
//         count = -(sliderItemAll.length - 1) * 100;
//         positionItem = sliderItemAll.length;
//       } 
//     }
//     if(positionItem <= sliderItemAll.length)
//       sliderItemAll.forEach((item, index) => item.style.transform = `translate(${count}%)`)  
//   }
// }
//  multiItemSlider('.slider')

/*Структура
.slider>.slider__wrapper>.slider__item*3>{$}.slider__content^^.slider__btn.slider__btn--left+.slider__btn.slider__btn--right
  Стили
  .slider__wrapper{
    display: flex;
    overflow: hidden;
  }
  .slider__item{
    flex-shrink: 0;
    width: 100%;
  }
  .slider__content{
    height: 250px;
  }

*/
//     let transformItem = (direction) => {
//       if (direction === 'right') {
//         if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.getMax) 
//           return;
//         if (!sliderControlLeft.classList.contains('slider__control_show')) {
//           sliderControlLeft.classList.add('slider__control_show');
//         }
//         if (sliderControlRight.classList.contains('slider__control_show') && (positionLeftItem + wrapperWidth / itemWidth) >= position.getMax) {
//           sliderControlRight.classList.remove('slider__control_show');
//         }
//         positionLeftItem++;
//         transform -= step;
//       }
//       if (direction === 'left') {
//         if (positionLeftItem <= position.getMin) {
//           return;
//         }
//         if (!sliderControlRight.classList.contains('slider__control_show')) {
//           sliderControlRight.classList.add('slider__control_show');
//         }
//         if (sliderControlLeft.classList.contains('slider__control_show') && positionLeftItem - 1 <= position.getMin) {
//           sliderControlLeft.classList.remove('slider__control_show');
//         }
//         positionLeftItem--;
//         transform += step;
//       }
//       sliderWrapper.style.transform = 'translateX(' + transform + '%)';
//     }
// //Этап 2 -  обработчик события click для кнопок "назад" и "вперед"
//     let controlClick = (e) => {
//       e.preventDefault();
//       if (e.target.classList.contains('slider__control')) { 
//         let direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
//         transformItem(direction);
//       }
//     };
// //Этап 3
// // добавление к кнопкам "назад" и "вперед" обработчика controlClick для события click
//   sliderControls.forEach((item) =>  item.addEventListener('click', controlClick));
//     return {
//       right: () => transformItem('right'),
//       left: () => transformItem('left')
//     }
// };
// multiItemSlider('.slider')
"use strict";

},{}],3:[function(require,module,exports){
// 'use strict';
// var multiItemSlider = (function () {
//   return function (selector, config) {
//     var
//       _mainElement = document.querySelector(selector), // основный элемент блока
//       _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
//       _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
//       _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
//       _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
//       _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
//       _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
//       _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
//       _positionLeftItem = 0, // позиция левого активного элемента
//       _transform = 0, // значение транфсофрмации .slider_wrapper
//       _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
//       _items = []; // массив элементов
//     // наполнение массива _items
//     _sliderItems.forEach(function (item, index) {
//       _items.push({ item: item, position: index, transform: 0 });
//     });
//     var position = {
//       getMin: 0,
//       getMax: _items.length - 1,
//     }
//     var _transformItem = function (direction) {
//       if (direction === 'right') {
//         if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
//           return;
//         }
//         if (!_sliderControlLeft.classList.contains('slider__control_show')) {
//           _sliderControlLeft.classList.add('slider__control_show');
//         }
//         if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
//           _sliderControlRight.classList.remove('slider__control_show');
//         }
//         _positionLeftItem++;
//         _transform -= _step;
//       }
//       if (direction === 'left') {
//         if (_positionLeftItem <= position.getMin) {
//           return;
//         }
//         if (!_sliderControlRight.classList.contains('slider__control_show')) {
//           _sliderControlRight.classList.add('slider__control_show');
//         }
//         if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
//           _sliderControlLeft.classList.remove('slider__control_show');
//         }
//         _positionLeftItem--;
//         _transform += _step;
//       }
//       _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
//     }
//     // обработчик события click для кнопок "назад" и "вперед"
//     var _controlClick = function (e) {
//       if (e.target.classList.contains('slider__control')) {
//         e.preventDefault();
//         var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
//         _transformItem(direction);
//       }
//     };
//     var _setUpListeners = function () {
//       // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
//       _sliderControls.forEach(function (item) {
//         item.addEventListener('click', _controlClick);
//       });
//     }
//     // инициализация
//     _setUpListeners();
//     return {
//       right: function () { // метод right
//         _transformItem('right');
//       },
//       left: function () { // метод left
//         _transformItem('left');
//       }
//     }
//   }
// }());
// export default multiItemSlider('.slider')
"use strict";

},{}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm1haW4xLmpzIiwibWFpbjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7OztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcbi8qXHJcbiAg0L/QvtC60LAg0L3QtSDQt9C90LDRjiDQvdCw0YHQutC+0LvRjNC60L4g0YXQvtGA0L7RiCDRgtCw0LrQvtC5INGB0L/QvtGB0L7QsSDQv9C+0LTQutC70Y7Rh9C10L3QuNGPLiDQndC1INGB0L7QstGB0LXQvCDQv9C+0L3Rj9GC0L3Qviwg0L3Rg9C20L3QviDQu9C4INCyIGJ1bmRsZSBcclxuICDRgtGP0L3Rg9GC0Ywg0LLRgdGOINCx0LjQsdC70LjQvtGC0LXQutGDIGJvb3RzdHJhcCDQuCBqcXVlcnkg0Lgg0YHQvtCy0LXRgNGI0LDRgtGMINGN0YLQviDQv9GA0Lgg0LrQsNC20LTQvtC5INC/0LXRgNC10LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLPyDQtNCwINC10YnRkSDQuFxyXG4gINGD0LbQuNC80LDRgtGMPyDQndCw0LLQtdGA0L3QviDRgtCw0Log0L3QtSDQtNC10LvQsNGO0YIuXHJcblxyXG4gINCS0LDRgNC40LDQvdGC0Ysg0YEg0L/QvtC00LrQu9GO0YfQtdC90LjQtdC8INGH0LXRgNC10LcgQ0ROINC90LUg0L7Rh9C10L3RjCDRgi7Qui4g0LvQuNGI0L3QuNC1INC30LDQv9GA0L7RgdGLINC6INGB0LXRgNCy0LXRgNGDINGC0L7RgNC80L7Qt9GP0YIg0LfQsNCz0YDRg9C30LrRgyDRgdCw0LnRgtCwLlxyXG4gIFxyXG4qL1xyXG4vLyBpbXBvcnQgJCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5zbGltXCI7XHJcbi8vIGltcG9ydCAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUnXHJcblxyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcblxyXG4iLCIvL9Ch0LvQsNC50LTQtdGAINC30LDQstC40YHQuNGCINC+0YIgZmxleEJveFxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXVsdGlJdGVtU2xpZGVyIChzZWxlY3RvciwgY29uZmlnKSB7XG4vLyAgIGxldFxuLy8gICAgIG1haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciksLy8g0L7RgdC90L7QstC90YvQuSDRjdC70LXQvNC10L3RgiDQsdC70L7QutCwLiDQndGD0LbQvdC+INGN0YLQviDRh9GC0L4g0LHRiyDQv9C+0LjRgdC6INCx0YvQuyDQvtGCINC90LXQs9C+LCDQsCDQvdC1INCz0LTQtS3RgtC+INC90LAg0YHQsNC50YLQtSBcbi8vICAgICBzbGlkZXJJdGVtQWxsID0gbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9faXRlbScpLFxuLy8gICAgIHNsaWRlckJ0bkxlZnQgPSBtYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19idG4tLWxlZnQnKSwgLy8g0LrQvdC+0L/QutCwIFwiTEVGVFwiXG4vLyAgICAgc2xpZGVyQnRuUmlnaHQgPSBtYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19idG4tLXJpZ2h0JyksIC8vINC60L3QvtC/0LrQsCBcIlJJR0hUXCJcbi8vICAgICBwb3NpdGlvbkl0ZW0gPSAxLCAvLyDQv9C+0LfQuNGG0LjRjyDQu9C10LLQvtCz0L4g0LDQutGC0LjQstC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LBcbi8vICAgICBjb3VudCA9IDA7XG5cbi8vICAgLy/QrdGC0LDQvyAxXG4vLyAgIFtzbGlkZXJCdG5MZWZ0LCBzbGlkZXJCdG5SaWdodF0uZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0blN0ZXApKVxuLy8gICAvL9Ct0YLQsNC/IDJcbi8vICAgZnVuY3Rpb24gYnRuU3RlcChlKXtcbiAgICBcbi8vICAgICBpZihlLnRhcmdldCA9PT0gc2xpZGVyQnRuUmlnaHQpe1xuLy8gICAgICAgaWYocG9zaXRpb25JdGVtIDwgc2xpZGVySXRlbUFsbC5sZW5ndGgpe1xuLy8gICAgICAgICBjb3VudCA9IGNvdW50IC0gMTAwXG4vLyAgICAgICAgIHBvc2l0aW9uSXRlbSsrXG4vLyAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgcG9zaXRpb25JdGVtID0gMTtcbi8vICAgICAgICAgY291bnQgPSAwO1xuLy8gICAgICAgfSBcbi8vICAgICB9XG5cbi8vICAgICBpZihlLnRhcmdldCA9PT0gc2xpZGVyQnRuTGVmdCl7XG4vLyAgICAgICBpZihwb3NpdGlvbkl0ZW0gPiAxICYmIHBvc2l0aW9uSXRlbSA8PSBzbGlkZXJJdGVtQWxsLmxlbmd0aCl7XG4vLyAgICAgICAgIGNvdW50ID0gY291bnQgKyAxMDBcbi8vICAgICAgICAgcG9zaXRpb25JdGVtLS1cbi8vICAgICAgIH1lbHNle1xuLy8gICAgICAgICBjb3VudCA9IC0oc2xpZGVySXRlbUFsbC5sZW5ndGggLSAxKSAqIDEwMDtcbi8vICAgICAgICAgcG9zaXRpb25JdGVtID0gc2xpZGVySXRlbUFsbC5sZW5ndGg7XG4vLyAgICAgICB9IFxuLy8gICAgIH1cblxuLy8gICAgIGlmKHBvc2l0aW9uSXRlbSA8PSBzbGlkZXJJdGVtQWxsLmxlbmd0aClcbi8vICAgICAgIHNsaWRlckl0ZW1BbGwuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2NvdW50fSUpYCkgIFxuLy8gICB9XG4vLyB9XG5cbi8vICBtdWx0aUl0ZW1TbGlkZXIoJy5zbGlkZXInKVxuXG5cbi8q0KHRgtGA0YPQutGC0YPRgNCwXG4uc2xpZGVyPi5zbGlkZXJfX3dyYXBwZXI+LnNsaWRlcl9faXRlbSozPnskfS5zbGlkZXJfX2NvbnRlbnReXi5zbGlkZXJfX2J0bi5zbGlkZXJfX2J0bi0tbGVmdCsuc2xpZGVyX19idG4uc2xpZGVyX19idG4tLXJpZ2h0XG4gINCh0YLQuNC70LhcbiAgLnNsaWRlcl9fd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnNsaWRlcl9faXRlbXtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2xpZGVyX19jb250ZW50e1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cblxuKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vICAgICBsZXQgdHJhbnNmb3JtSXRlbSA9IChkaXJlY3Rpb24pID0+IHtcbi8vICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbi8vICAgICAgICAgaWYgKChwb3NpdGlvbkxlZnRJdGVtICsgd3JhcHBlcldpZHRoIC8gaXRlbVdpZHRoIC0gMSkgPj0gcG9zaXRpb24uZ2V0TWF4KSBcbi8vICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuLy8gICAgICAgICBpZiAoIXNsaWRlckNvbnRyb2xMZWZ0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sX3Nob3cnKSkge1xuLy8gICAgICAgICAgIHNsaWRlckNvbnRyb2xMZWZ0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fY29udHJvbF9zaG93Jyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKHNsaWRlckNvbnRyb2xSaWdodC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbF9zaG93JykgJiYgKHBvc2l0aW9uTGVmdEl0ZW0gKyB3cmFwcGVyV2lkdGggLyBpdGVtV2lkdGgpID49IHBvc2l0aW9uLmdldE1heCkge1xuLy8gICAgICAgICAgIHNsaWRlckNvbnRyb2xSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX2NvbnRyb2xfc2hvdycpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHBvc2l0aW9uTGVmdEl0ZW0rKztcbi8vICAgICAgICAgdHJhbnNmb3JtIC09IHN0ZXA7XG4vLyAgICAgICB9XG4vLyAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbi8vICAgICAgICAgaWYgKHBvc2l0aW9uTGVmdEl0ZW0gPD0gcG9zaXRpb24uZ2V0TWluKSB7XG4vLyAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmICghc2xpZGVyQ29udHJvbFJpZ2h0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sX3Nob3cnKSkge1xuLy8gICAgICAgICAgIHNsaWRlckNvbnRyb2xSaWdodC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfX2NvbnRyb2xfc2hvdycpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmIChzbGlkZXJDb250cm9sTGVmdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbF9zaG93JykgJiYgcG9zaXRpb25MZWZ0SXRlbSAtIDEgPD0gcG9zaXRpb24uZ2V0TWluKSB7XG4vLyAgICAgICAgICAgc2xpZGVyQ29udHJvbExlZnQuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX19jb250cm9sX3Nob3cnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBwb3NpdGlvbkxlZnRJdGVtLS07XG4vLyAgICAgICAgIHRyYW5zZm9ybSArPSBzdGVwO1xuLy8gICAgICAgfVxuLy8gICAgICAgc2xpZGVyV3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdHJhbnNmb3JtICsgJyUpJztcbi8vICAgICB9XG5cbi8vIC8v0K3RgtCw0L8gMiAtICDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyBjbGljayDQtNC70Y8g0LrQvdC+0L/QvtC6IFwi0L3QsNC30LDQtFwiINC4IFwi0LLQv9C10YDQtdC0XCJcbi8vICAgICBsZXQgY29udHJvbENsaWNrID0gKGUpID0+IHtcbi8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbCcpKSB7IFxuLy8gICAgICAgICBsZXQgZGlyZWN0aW9uID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2NvbnRyb2xfcmlnaHQnKSA/ICdyaWdodCcgOiAnbGVmdCc7XG4vLyAgICAgICAgIHRyYW5zZm9ybUl0ZW0oZGlyZWN0aW9uKTtcbi8vICAgICAgIH1cbi8vICAgICB9O1xuLy8gLy/QrdGC0LDQvyAzXG4gICBcbi8vIC8vINC00L7QsdCw0LLQu9C10L3QuNC1INC6INC60L3QvtC/0LrQsNC8IFwi0L3QsNC30LDQtFwiINC4IFwi0LLQv9C10YDQtdC0XCIg0L7QsdGA0LDQsdC+0YLRh9C40LrQsCBjb250cm9sQ2xpY2sg0LTQu9GPINGB0L7QsdGL0YLQuNGPIGNsaWNrXG4vLyAgIHNsaWRlckNvbnRyb2xzLmZvckVhY2goKGl0ZW0pID0+ICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbENsaWNrKSk7XG4gICAgICAgIFxuICAgICBcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICByaWdodDogKCkgPT4gdHJhbnNmb3JtSXRlbSgncmlnaHQnKSxcbi8vICAgICAgIGxlZnQ6ICgpID0+IHRyYW5zZm9ybUl0ZW0oJ2xlZnQnKVxuLy8gICAgIH1cbi8vIH07XG5cblxuLy8gbXVsdGlJdGVtU2xpZGVyKCcuc2xpZGVyJylcbiIsIi8vICd1c2Ugc3RyaWN0Jztcbi8vIHZhciBtdWx0aUl0ZW1TbGlkZXIgPSAoZnVuY3Rpb24gKCkge1xuLy8gICByZXR1cm4gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb25maWcpIHtcbi8vICAgICB2YXJcbi8vICAgICAgIF9tYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLCAvLyDQvtGB0L3QvtCy0L3Ri9C5INGN0LvQtdC80LXQvdGCINCx0LvQvtC60LBcbi8vICAgICAgIF9zbGlkZXJXcmFwcGVyID0gX21haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3dyYXBwZXInKSwgLy8g0L7QsdC10YDRgtC60LAg0LTQu9GPIC5zbGlkZXItaXRlbVxuLy8gICAgICAgX3NsaWRlckl0ZW1zID0gX21haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX2l0ZW0nKSwgLy8g0Y3Qu9C10LzQtdC90YLRiyAoLnNsaWRlci1pdGVtKVxuLy8gICAgICAgX3NsaWRlckNvbnRyb2xzID0gX21haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX2NvbnRyb2wnKSwgLy8g0Y3Qu9C10LzQtdC90YLRiyDRg9C/0YDQsNCy0LvQtdC90LjRj1xuLy8gICAgICAgX3NsaWRlckNvbnRyb2xMZWZ0ID0gX21haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2NvbnRyb2xfbGVmdCcpLCAvLyDQutC90L7Qv9C60LAgXCJMRUZUXCJcbi8vICAgICAgIF9zbGlkZXJDb250cm9sUmlnaHQgPSBfbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fY29udHJvbF9yaWdodCcpLCAvLyDQutC90L7Qv9C60LAgXCJSSUdIVFwiXG4vLyAgICAgICBfd3JhcHBlcldpZHRoID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKF9zbGlkZXJXcmFwcGVyKS53aWR0aCksIC8vINGI0LjRgNC40L3QsCDQvtCx0ZHRgNGC0LrQuFxuLy8gICAgICAgX2l0ZW1XaWR0aCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShfc2xpZGVySXRlbXNbMF0pLndpZHRoKSwgLy8g0YjQuNGA0LjQvdCwINC+0LTQvdC+0LPQviDRjdC70LXQvNC10L3RgtCwICAgIFxuLy8gICAgICAgX3Bvc2l0aW9uTGVmdEl0ZW0gPSAwLCAvLyDQv9C+0LfQuNGG0LjRjyDQu9C10LLQvtCz0L4g0LDQutGC0LjQstC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LBcbi8vICAgICAgIF90cmFuc2Zvcm0gPSAwLCAvLyDQt9C90LDRh9C10L3QuNC1INGC0YDQsNC90YTRgdC+0YTRgNC80LDRhtC40LggLnNsaWRlcl93cmFwcGVyXG4vLyAgICAgICBfc3RlcCA9IF9pdGVtV2lkdGggLyBfd3JhcHBlcldpZHRoICogMTAwLCAvLyDQstC10LvQuNGH0LjQvdCwINGI0LDQs9CwICjQtNC70Y8g0YLRgNCw0L3RgdGE0L7RgNC80LDRhtC40LgpXG4vLyAgICAgICBfaXRlbXMgPSBbXTsgLy8g0LzQsNGB0YHQuNCyINGN0LvQtdC80LXQvdGC0L7QslxuLy8gICAgIC8vINC90LDQv9C+0LvQvdC10L3QuNC1INC80LDRgdGB0LjQstCwIF9pdGVtc1xuLy8gICAgIF9zbGlkZXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuLy8gICAgICAgX2l0ZW1zLnB1c2goeyBpdGVtOiBpdGVtLCBwb3NpdGlvbjogaW5kZXgsIHRyYW5zZm9ybTogMCB9KTtcbi8vICAgICB9KTtcblxuLy8gICAgIHZhciBwb3NpdGlvbiA9IHtcbi8vICAgICAgIGdldE1pbjogMCxcbi8vICAgICAgIGdldE1heDogX2l0ZW1zLmxlbmd0aCAtIDEsXG4vLyAgICAgfVxuXG4vLyAgICAgdmFyIF90cmFuc2Zvcm1JdGVtID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuLy8gICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuLy8gICAgICAgICBpZiAoKF9wb3NpdGlvbkxlZnRJdGVtICsgX3dyYXBwZXJXaWR0aCAvIF9pdGVtV2lkdGggLSAxKSA+PSBwb3NpdGlvbi5nZXRNYXgpIHtcbi8vICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKCFfc2xpZGVyQ29udHJvbExlZnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2NvbnRyb2xfc2hvdycpKSB7XG4vLyAgICAgICAgICAgX3NsaWRlckNvbnRyb2xMZWZ0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fY29udHJvbF9zaG93Jyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKF9zbGlkZXJDb250cm9sUmlnaHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2NvbnRyb2xfc2hvdycpICYmIChfcG9zaXRpb25MZWZ0SXRlbSArIF93cmFwcGVyV2lkdGggLyBfaXRlbVdpZHRoKSA+PSBwb3NpdGlvbi5nZXRNYXgpIHtcbi8vICAgICAgICAgICBfc2xpZGVyQ29udHJvbFJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlcl9fY29udHJvbF9zaG93Jyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgX3Bvc2l0aW9uTGVmdEl0ZW0rKztcbi8vICAgICAgICAgX3RyYW5zZm9ybSAtPSBfc3RlcDtcbi8vICAgICAgIH1cbi8vICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuLy8gICAgICAgICBpZiAoX3Bvc2l0aW9uTGVmdEl0ZW0gPD0gcG9zaXRpb24uZ2V0TWluKSB7XG4vLyAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmICghX3NsaWRlckNvbnRyb2xSaWdodC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbF9zaG93JykpIHtcbi8vICAgICAgICAgICBfc2xpZGVyQ29udHJvbFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fY29udHJvbF9zaG93Jyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKF9zbGlkZXJDb250cm9sTGVmdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbF9zaG93JykgJiYgX3Bvc2l0aW9uTGVmdEl0ZW0gLSAxIDw9IHBvc2l0aW9uLmdldE1pbikge1xuLy8gICAgICAgICAgIF9zbGlkZXJDb250cm9sTGVmdC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX2NvbnRyb2xfc2hvdycpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIF9wb3NpdGlvbkxlZnRJdGVtLS07XG4vLyAgICAgICAgIF90cmFuc2Zvcm0gKz0gX3N0ZXA7XG4vLyAgICAgICB9XG4vLyAgICAgICBfc2xpZGVyV3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgX3RyYW5zZm9ybSArICclKSc7XG4vLyAgICAgfVxuXG4vLyAgICAgLy8g0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8gY2xpY2sg0LTQu9GPINC60L3QvtC/0L7QuiBcItC90LDQt9Cw0LRcIiDQuCBcItCy0L/QtdGA0LXQtFwiXG4vLyAgICAgdmFyIF9jb250cm9sQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sJykpIHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICB2YXIgZGlyZWN0aW9uID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2NvbnRyb2xfcmlnaHQnKSA/ICdyaWdodCcgOiAnbGVmdCc7XG4vLyAgICAgICAgIF90cmFuc2Zvcm1JdGVtKGRpcmVjdGlvbik7XG4vLyAgICAgICB9XG4vLyAgICAgfTtcblxuLy8gICAgIHZhciBfc2V0VXBMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQuiDQutC90L7Qv9C60LDQvCBcItC90LDQt9Cw0LRcIiDQuCBcItCy0L/QtdGA0LXQtFwiINC+0LHRgNCx0L7RgtGH0LjQutCwIF9jb250cm9sQ2xpY2sg0LTQu9GPINGB0L7QsdGL0YLRjyBjbGlja1xuLy8gICAgICAgX3NsaWRlckNvbnRyb2xzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbi8vICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jb250cm9sQ2xpY2spO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfVxuXG4vLyAgICAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y9cbi8vICAgICBfc2V0VXBMaXN0ZW5lcnMoKTtcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICByaWdodDogZnVuY3Rpb24gKCkgeyAvLyDQvNC10YLQvtC0IHJpZ2h0XG4vLyAgICAgICAgIF90cmFuc2Zvcm1JdGVtKCdyaWdodCcpO1xuLy8gICAgICAgfSxcbi8vICAgICAgIGxlZnQ6IGZ1bmN0aW9uICgpIHsgLy8g0LzQtdGC0L7QtCBsZWZ0XG4vLyAgICAgICAgIF90cmFuc2Zvcm1JdGVtKCdsZWZ0Jyk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgIH1cbi8vIH0oKSk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IG11bHRpSXRlbVNsaWRlcignLnNsaWRlcicpXG4iXX0=
