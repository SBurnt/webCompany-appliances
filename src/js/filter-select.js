const selectType = document.querySelector('.type');
const selectSingleTitleType = selectType.querySelector('.select__title');
const selectSingleLabelsType = selectType.querySelectorAll('.select__label');

// Toggle menu
selectSingleTitleType.addEventListener('click', () => {
  if ('active' === selectType.getAttribute('data-state')) {
    selectType.setAttribute('data-state', '');
  } else {
    selectType.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingleLabelsType.length; i++) {
  selectSingleLabelsType[i].addEventListener('click', (evt) => {
    selectSingleTitleType.textContent = evt.target.textContent;
    selectType.setAttribute('data-state', '');
  });
}

const selectBrand = document.querySelector('.brand');
const selectSingleTitleBrand = selectBrand.querySelector('.select__title');
const selectSingleLabelsBrand = selectBrand.querySelectorAll('.select__label');

// Toggle menu
selectSingleTitleBrand.addEventListener('click', () => {
  if ('active' === selectBrand.getAttribute('data-state')) {
    selectBrand.setAttribute('data-state', '');
  } else {
    selectBrand.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingleLabelsBrand.length; i++) {
  selectSingleLabelsBrand[i].addEventListener('click', (evt) => {
    selectSingleTitleBrand.textContent = evt.target.textContent;
    selectBrand.setAttribute('data-state', '');
  });
}
