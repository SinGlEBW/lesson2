(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm1haW4xLmpzIiwibWFpbjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBpbXBvcnQgJCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5zbGltXCI7XHJcbi8vIGltcG9ydCAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUnXHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwJztcclxuXHJcbiIsIi8v0KHQu9Cw0LnQtNC10YAg0LfQsNCy0LjRgdC40YIg0L7RgiBmbGV4Qm94XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtdWx0aUl0ZW1TbGlkZXIgKHNlbGVjdG9yLCBjb25maWcpIHtcbi8vICAgbGV0XG4vLyAgICAgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSwvLyDQvtGB0L3QvtCy0L3Ri9C5INGN0LvQtdC80LXQvdGCINCx0LvQvtC60LAuINCd0YPQttC90L4g0Y3RgtC+INGH0YLQviDQsdGLINC/0L7QuNGB0Log0LHRi9C7INC+0YIg0L3QtdCz0L4sINCwINC90LUg0LPQtNC1LdGC0L4g0L3QsCDRgdCw0LnRgtC1IFxuLy8gICAgIHNsaWRlckl0ZW1BbGwgPSBtYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19pdGVtJyksXG4vLyAgICAgc2xpZGVyQnRuTGVmdCA9IG1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2J0bi0tbGVmdCcpLCAvLyDQutC90L7Qv9C60LAgXCJMRUZUXCJcbi8vICAgICBzbGlkZXJCdG5SaWdodCA9IG1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2J0bi0tcmlnaHQnKSwgLy8g0LrQvdC+0L/QutCwIFwiUklHSFRcIlxuLy8gICAgIHBvc2l0aW9uSXRlbSA9IDEsIC8vINC/0L7Qt9C40YbQuNGPINC70LXQstC+0LPQviDQsNC60YLQuNCy0L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsFxuLy8gICAgIGNvdW50ID0gMDtcblxuLy8gICAvL9Ct0YLQsNC/IDFcbi8vICAgW3NsaWRlckJ0bkxlZnQsIHNsaWRlckJ0blJpZ2h0XS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuU3RlcCkpXG4vLyAgIC8v0K3RgtCw0L8gMlxuLy8gICBmdW5jdGlvbiBidG5TdGVwKGUpe1xuICAgIFxuLy8gICAgIGlmKGUudGFyZ2V0ID09PSBzbGlkZXJCdG5SaWdodCl7XG4vLyAgICAgICBpZihwb3NpdGlvbkl0ZW0gPCBzbGlkZXJJdGVtQWxsLmxlbmd0aCl7XG4vLyAgICAgICAgIGNvdW50ID0gY291bnQgLSAxMDBcbi8vICAgICAgICAgcG9zaXRpb25JdGVtKytcbi8vICAgICAgIH1lbHNle1xuLy8gICAgICAgICBwb3NpdGlvbkl0ZW0gPSAxO1xuLy8gICAgICAgICBjb3VudCA9IDA7XG4vLyAgICAgICB9IFxuLy8gICAgIH1cblxuLy8gICAgIGlmKGUudGFyZ2V0ID09PSBzbGlkZXJCdG5MZWZ0KXtcbi8vICAgICAgIGlmKHBvc2l0aW9uSXRlbSA+IDEgJiYgcG9zaXRpb25JdGVtIDw9IHNsaWRlckl0ZW1BbGwubGVuZ3RoKXtcbi8vICAgICAgICAgY291bnQgPSBjb3VudCArIDEwMFxuLy8gICAgICAgICBwb3NpdGlvbkl0ZW0tLVxuLy8gICAgICAgfWVsc2V7XG4vLyAgICAgICAgIGNvdW50ID0gLShzbGlkZXJJdGVtQWxsLmxlbmd0aCAtIDEpICogMTAwO1xuLy8gICAgICAgICBwb3NpdGlvbkl0ZW0gPSBzbGlkZXJJdGVtQWxsLmxlbmd0aDtcbi8vICAgICAgIH0gXG4vLyAgICAgfVxuXG4vLyAgICAgaWYocG9zaXRpb25JdGVtIDw9IHNsaWRlckl0ZW1BbGwubGVuZ3RoKVxuLy8gICAgICAgc2xpZGVySXRlbUFsbC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7Y291bnR9JSlgKSAgXG4vLyAgIH1cbi8vIH1cblxuLy8gIG11bHRpSXRlbVNsaWRlcignLnNsaWRlcicpXG5cblxuLyrQodGC0YDRg9C60YLRg9GA0LBcbi5zbGlkZXI+LnNsaWRlcl9fd3JhcHBlcj4uc2xpZGVyX19pdGVtKjM+eyR9LnNsaWRlcl9fY29udGVudF5eLnNsaWRlcl9fYnRuLnNsaWRlcl9fYnRuLS1sZWZ0Ky5zbGlkZXJfX2J0bi5zbGlkZXJfX2J0bi0tcmlnaHRcbiAg0KHRgtC40LvQuFxuICAuc2xpZGVyX193cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuc2xpZGVyX19pdGVte1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zbGlkZXJfX2NvbnRlbnR7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuXG4qL1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gICAgIGxldCB0cmFuc2Zvcm1JdGVtID0gKGRpcmVjdGlvbikgPT4ge1xuLy8gICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuLy8gICAgICAgICBpZiAoKHBvc2l0aW9uTGVmdEl0ZW0gKyB3cmFwcGVyV2lkdGggLyBpdGVtV2lkdGggLSAxKSA+PSBwb3NpdGlvbi5nZXRNYXgpIFxuLy8gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4vLyAgICAgICAgIGlmICghc2xpZGVyQ29udHJvbExlZnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2NvbnRyb2xfc2hvdycpKSB7XG4vLyAgICAgICAgICAgc2xpZGVyQ29udHJvbExlZnQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyX19jb250cm9sX3Nob3cnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAoc2xpZGVyQ29udHJvbFJpZ2h0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sX3Nob3cnKSAmJiAocG9zaXRpb25MZWZ0SXRlbSArIHdyYXBwZXJXaWR0aCAvIGl0ZW1XaWR0aCkgPj0gcG9zaXRpb24uZ2V0TWF4KSB7XG4vLyAgICAgICAgICAgc2xpZGVyQ29udHJvbFJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlcl9fY29udHJvbF9zaG93Jyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcG9zaXRpb25MZWZ0SXRlbSsrO1xuLy8gICAgICAgICB0cmFuc2Zvcm0gLT0gc3RlcDtcbi8vICAgICAgIH1cbi8vICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuLy8gICAgICAgICBpZiAocG9zaXRpb25MZWZ0SXRlbSA8PSBwb3NpdGlvbi5nZXRNaW4pIHtcbi8vICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKCFzbGlkZXJDb250cm9sUmlnaHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2NvbnRyb2xfc2hvdycpKSB7XG4vLyAgICAgICAgICAgc2xpZGVyQ29udHJvbFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fY29udHJvbF9zaG93Jyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKHNsaWRlckNvbnRyb2xMZWZ0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sX3Nob3cnKSAmJiBwb3NpdGlvbkxlZnRJdGVtIC0gMSA8PSBwb3NpdGlvbi5nZXRNaW4pIHtcbi8vICAgICAgICAgICBzbGlkZXJDb250cm9sTGVmdC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX2NvbnRyb2xfc2hvdycpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHBvc2l0aW9uTGVmdEl0ZW0tLTtcbi8vICAgICAgICAgdHJhbnNmb3JtICs9IHN0ZXA7XG4vLyAgICAgICB9XG4vLyAgICAgICBzbGlkZXJXcmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2Zvcm0gKyAnJSknO1xuLy8gICAgIH1cblxuLy8gLy/QrdGC0LDQvyAyIC0gINC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPIGNsaWNrINC00LvRjyDQutC90L7Qv9C+0LogXCLQvdCw0LfQsNC0XCIg0LggXCLQstC/0LXRgNC10LRcIlxuLy8gICAgIGxldCBjb250cm9sQ2xpY2sgPSAoZSkgPT4ge1xuLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sJykpIHsgXG4vLyAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbF9yaWdodCcpID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcbi8vICAgICAgICAgdHJhbnNmb3JtSXRlbShkaXJlY3Rpb24pO1xuLy8gICAgICAgfVxuLy8gICAgIH07XG4vLyAvL9Ct0YLQsNC/IDNcbiAgIFxuLy8gLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0Log0LrQvdC+0L/QutCw0LwgXCLQvdCw0LfQsNC0XCIg0LggXCLQstC/0LXRgNC10LRcIiDQvtCx0YDQsNCx0L7RgtGH0LjQutCwIGNvbnRyb2xDbGljayDQtNC70Y8g0YHQvtCx0YvRgtC40Y8gY2xpY2tcbi8vICAgc2xpZGVyQ29udHJvbHMuZm9yRWFjaCgoaXRlbSkgPT4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sQ2xpY2spKTtcbiAgICAgICAgXG4gICAgIFxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHJpZ2h0OiAoKSA9PiB0cmFuc2Zvcm1JdGVtKCdyaWdodCcpLFxuLy8gICAgICAgbGVmdDogKCkgPT4gdHJhbnNmb3JtSXRlbSgnbGVmdCcpXG4vLyAgICAgfVxuLy8gfTtcblxuXG4vLyBtdWx0aUl0ZW1TbGlkZXIoJy5zbGlkZXInKVxuIiwiLy8gJ3VzZSBzdHJpY3QnO1xuLy8gdmFyIG11bHRpSXRlbVNsaWRlciA9IChmdW5jdGlvbiAoKSB7XG4vLyAgIHJldHVybiBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbmZpZykge1xuLy8gICAgIHZhclxuLy8gICAgICAgX21haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciksIC8vINC+0YHQvdC+0LLQvdGL0Lkg0Y3Qu9C10LzQtdC90YIg0LHQu9C+0LrQsFxuLy8gICAgICAgX3NsaWRlcldyYXBwZXIgPSBfbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fd3JhcHBlcicpLCAvLyDQvtCx0LXRgNGC0LrQsCDQtNC70Y8gLnNsaWRlci1pdGVtXG4vLyAgICAgICBfc2xpZGVySXRlbXMgPSBfbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9faXRlbScpLCAvLyDRjdC70LXQvNC10L3RgtGLICguc2xpZGVyLWl0ZW0pXG4vLyAgICAgICBfc2xpZGVyQ29udHJvbHMgPSBfbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9fY29udHJvbCcpLCAvLyDRjdC70LXQvNC10L3RgtGLINGD0L/RgNCw0LLQu9C10L3QuNGPXG4vLyAgICAgICBfc2xpZGVyQ29udHJvbExlZnQgPSBfbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fY29udHJvbF9sZWZ0JyksIC8vINC60L3QvtC/0LrQsCBcIkxFRlRcIlxuLy8gICAgICAgX3NsaWRlckNvbnRyb2xSaWdodCA9IF9tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19jb250cm9sX3JpZ2h0JyksIC8vINC60L3QvtC/0LrQsCBcIlJJR0hUXCJcbi8vICAgICAgIF93cmFwcGVyV2lkdGggPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoX3NsaWRlcldyYXBwZXIpLndpZHRoKSwgLy8g0YjQuNGA0LjQvdCwINC+0LHRkdGA0YLQutC4XG4vLyAgICAgICBfaXRlbVdpZHRoID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKF9zbGlkZXJJdGVtc1swXSkud2lkdGgpLCAvLyDRiNC40YDQuNC90LAg0L7QtNC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LAgICAgXG4vLyAgICAgICBfcG9zaXRpb25MZWZ0SXRlbSA9IDAsIC8vINC/0L7Qt9C40YbQuNGPINC70LXQstC+0LPQviDQsNC60YLQuNCy0L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsFxuLy8gICAgICAgX3RyYW5zZm9ybSA9IDAsIC8vINC30L3QsNGH0LXQvdC40LUg0YLRgNCw0L3RhNGB0L7RhNGA0LzQsNGG0LjQuCAuc2xpZGVyX3dyYXBwZXJcbi8vICAgICAgIF9zdGVwID0gX2l0ZW1XaWR0aCAvIF93cmFwcGVyV2lkdGggKiAxMDAsIC8vINCy0LXQu9C40YfQuNC90LAg0YjQsNCz0LAgKNC00LvRjyDRgtGA0LDQvdGB0YTQvtGA0LzQsNGG0LjQuClcbi8vICAgICAgIF9pdGVtcyA9IFtdOyAvLyDQvNCw0YHRgdC40LIg0Y3Qu9C10LzQtdC90YLQvtCyXG4vLyAgICAgLy8g0L3QsNC/0L7Qu9C90LXQvdC40LUg0LzQsNGB0YHQuNCy0LAgX2l0ZW1zXG4vLyAgICAgX3NsaWRlckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4vLyAgICAgICBfaXRlbXMucHVzaCh7IGl0ZW06IGl0ZW0sIHBvc2l0aW9uOiBpbmRleCwgdHJhbnNmb3JtOiAwIH0pO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgdmFyIHBvc2l0aW9uID0ge1xuLy8gICAgICAgZ2V0TWluOiAwLFxuLy8gICAgICAgZ2V0TWF4OiBfaXRlbXMubGVuZ3RoIC0gMSxcbi8vICAgICB9XG5cbi8vICAgICB2YXIgX3RyYW5zZm9ybUl0ZW0gPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4vLyAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4vLyAgICAgICAgIGlmICgoX3Bvc2l0aW9uTGVmdEl0ZW0gKyBfd3JhcHBlcldpZHRoIC8gX2l0ZW1XaWR0aCAtIDEpID49IHBvc2l0aW9uLmdldE1heCkge1xuLy8gICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAoIV9zbGlkZXJDb250cm9sTGVmdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbF9zaG93JykpIHtcbi8vICAgICAgICAgICBfc2xpZGVyQ29udHJvbExlZnQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyX19jb250cm9sX3Nob3cnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAoX3NsaWRlckNvbnRyb2xSaWdodC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbF9zaG93JykgJiYgKF9wb3NpdGlvbkxlZnRJdGVtICsgX3dyYXBwZXJXaWR0aCAvIF9pdGVtV2lkdGgpID49IHBvc2l0aW9uLmdldE1heCkge1xuLy8gICAgICAgICAgIF9zbGlkZXJDb250cm9sUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX19jb250cm9sX3Nob3cnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBfcG9zaXRpb25MZWZ0SXRlbSsrO1xuLy8gICAgICAgICBfdHJhbnNmb3JtIC09IF9zdGVwO1xuLy8gICAgICAgfVxuLy8gICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4vLyAgICAgICAgIGlmIChfcG9zaXRpb25MZWZ0SXRlbSA8PSBwb3NpdGlvbi5nZXRNaW4pIHtcbi8vICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKCFfc2xpZGVyQ29udHJvbFJpZ2h0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sX3Nob3cnKSkge1xuLy8gICAgICAgICAgIF9zbGlkZXJDb250cm9sUmlnaHQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyX19jb250cm9sX3Nob3cnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAoX3NsaWRlckNvbnRyb2xMZWZ0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sX3Nob3cnKSAmJiBfcG9zaXRpb25MZWZ0SXRlbSAtIDEgPD0gcG9zaXRpb24uZ2V0TWluKSB7XG4vLyAgICAgICAgICAgX3NsaWRlckNvbnRyb2xMZWZ0LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlcl9fY29udHJvbF9zaG93Jyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgX3Bvc2l0aW9uTGVmdEl0ZW0tLTtcbi8vICAgICAgICAgX3RyYW5zZm9ybSArPSBfc3RlcDtcbi8vICAgICAgIH1cbi8vICAgICAgIF9zbGlkZXJXcmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyBfdHJhbnNmb3JtICsgJyUpJztcbi8vICAgICB9XG5cbi8vICAgICAvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyBjbGljayDQtNC70Y8g0LrQvdC+0L/QvtC6IFwi0L3QsNC30LDQtFwiINC4IFwi0LLQv9C10YDQtdC0XCJcbi8vICAgICB2YXIgX2NvbnRyb2xDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2NvbnRyb2wnKSkge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbF9yaWdodCcpID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcbi8vICAgICAgICAgX3RyYW5zZm9ybUl0ZW0oZGlyZWN0aW9uKTtcbi8vICAgICAgIH1cbi8vICAgICB9O1xuXG4vLyAgICAgdmFyIF9zZXRVcExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgIC8vINC00L7QsdCw0LLQu9C10L3QuNC1INC6INC60L3QvtC/0LrQsNC8IFwi0L3QsNC30LDQtFwiINC4IFwi0LLQv9C10YDQtdC0XCIg0L7QsdGA0LHQvtGC0YfQuNC60LAgX2NvbnRyb2xDbGljayDQtNC70Y8g0YHQvtCx0YvRgtGPIGNsaWNrXG4vLyAgICAgICBfc2xpZGVyQ29udHJvbHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuLy8gICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NvbnRyb2xDbGljayk7XG4vLyAgICAgICB9KTtcbi8vICAgICB9XG5cbi8vICAgICAvLyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRj1xuLy8gICAgIF9zZXRVcExpc3RlbmVycygpO1xuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHJpZ2h0OiBmdW5jdGlvbiAoKSB7IC8vINC80LXRgtC+0LQgcmlnaHRcbi8vICAgICAgICAgX3RyYW5zZm9ybUl0ZW0oJ3JpZ2h0Jyk7XG4vLyAgICAgICB9LFxuLy8gICAgICAgbGVmdDogZnVuY3Rpb24gKCkgeyAvLyDQvNC10YLQvtC0IGxlZnRcbi8vICAgICAgICAgX3RyYW5zZm9ybUl0ZW0oJ2xlZnQnKTtcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgfVxuLy8gfSgpKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgbXVsdGlJdGVtU2xpZGVyKCcuc2xpZGVyJylcbiJdfQ==
