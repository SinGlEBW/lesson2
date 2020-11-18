

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
