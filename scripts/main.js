'use strict';   //on the beginning of a function (or doc because it's a function too)
                //means "write code right. not a = 5 (undefined) but let (or const) a = 5"

const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
};

const openSubMenu = (event) => {
    event.preventDefault();
    const listItem = event.target.closest('.catalog-list__item');
    if (listItem) {
        subCatalogHeader.innerHTML = listItem.innerHTML;
        subCatalog.classList.add('subopen');

    }
};

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
};

btnBurger.addEventListener('click', openMenu);      //open menu by clicking btn-burger
btnClose.addEventListener('click', closeMenu);      //close menu by clicking btn-close
overlay.addEventListener('click', closeMenu);       //close menu by clicking on overlay
catalog.addEventListener('click', openSubMenu);     //open submenu by clicking catalog list
btnReturn.addEventListener('click', closeSubMenu);  //close submenu by clicking btn-return



document.addEventListener('keydown', (event) => {     //close menu by clicking ESC key
    if (event.code === 'Escape') {
        closeMenu();                            
    }
});