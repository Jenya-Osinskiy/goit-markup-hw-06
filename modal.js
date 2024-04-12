let buttonsectionone = document.querySelector('.button-section-one');
let modaloverlay = document.querySelector('.modal-overlay');
let modalclosebut = document.querySelector('.modal-close-but');

buttonsectionone.addEventListener('click', () => {
    modaloverlay.classList.add('is-open');
})

modalclosebut.addEventListener('click', (e) => {
    e.preventDefault();
    modaloverlay.classList.remove('is-open');
})

let navbtnopen = document.querySelector('.nav-btn-open');
let mobnav = document.querySelector('.mob-nav');
let mobclosebut = document.querySelector('.mob-close-but');

navbtnopen.addEventListener('click', () => {
    mobnav.classList.add('is-open-nav');
})

mobclosebut.addEventListener('click', (e) => {
    e.preventDefault();
    mobnav.classList.remove('is-open-nav');
})