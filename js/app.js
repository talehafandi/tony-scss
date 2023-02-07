const btnHamburger = document.querySelector('#btn-hambuger');
const menuHamburger = document.querySelector('#menu');
let isOpen = false;

btnHamburger.addEventListener('click', () => {
    // if (!isOpen) {
    //     // menuHamburger.style.display = 'flex';
    //     menuHamburger.style.display = 'none';
    //     isOpen = true;
    // } 
    // else {
    //     // menuHamburger.style.display = 'none';
    //     menuHamburger.style.top = '-1000px';
    //     isOpen = false;
    // }

    menuHamburger.classList.toggle('show');

}
)
