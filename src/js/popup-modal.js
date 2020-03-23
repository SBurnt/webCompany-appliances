// Browser compatibility ie11 (forEach)
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    // eslint-disable-next-line no-param-reassign
    thisArg = thisArg || window;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const body = document.querySelector('body');

// ---------- show mobile menu start ----------
const btnBurger = document.querySelector('.js-burger-toggle');
const menu = document.querySelector('.header__middle');

btnBurger.addEventListener('click', () => {
  menu.classList.toggle('active');
  // body.classList.toggle('overflow-hidden');
});
// ---------- show mobile menu end ----------

// ---------- show filter mobile start ----------
const btnFilterMob = document.querySelectorAll('.js-filter-toggle');
const filterMob = document.querySelector('.filter__desktop');

btnFilterMob.forEach(items => {
  items.addEventListener('click', () => {
    filterMob.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show filter mobile end ----------
