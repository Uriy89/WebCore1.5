var btnMoreElem = document.querySelector('.brands__btn-more');
var blockElements = document.querySelector('.brands-slider__wrapper');

var flag = false;



btnMoreElem.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!flag) {
    blockElements.classList.remove('brands-slider__wrapper');
    blockElements.classList.add('brands-slider__wrapper-all');
    btnMoreElem.classList.remove('brands__btn-more');
    btnMoreElem.classList.add('brands__btn-more--open');
    btnMoreElem.textContent = 'Скрыть';
    
    flag = true;
  } else {
    blockElements.classList.remove('brands-slider__wrapper-all');
    blockElements.classList.add('brands-slider__wrapper');
    btnMoreElem.classList.remove('brands__btn-more--open');
    btnMoreElem.classList.add('brands__btn-more');
    btnMoreElem.textContent = 'Показать все';
    flag = false;
  }
  
});

