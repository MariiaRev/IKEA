const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');


const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
};

const openSubMenu = (event) => {
    event.preventDefault();
    const listItem = event.target.closest('.catalog-list__item');
    if (listItem) {
        subCatalogHeader.innerHTML = listItem.innerHTML;
        subCatalog.classList.add('subopen');

    }
};

btnBurger.addEventListener('click', openMenu);      //open menu by clicking btn-burger
btnClose.addEventListener('click', closeMenu);      //close menu by clicking btn-close
overlay.addEventListener('click', closeMenu);       //close menu by clicking on overlay
catalog.addEventListener('click', openSubMenu); //open submenu by clicking catalog list




document.addEventListener('keydown', (event) => {     //close menu by clicking ESC key
    if (event.code === 'Escape') {
        closeMenu();                            
    }
});