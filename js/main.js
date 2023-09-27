const theme = 'theme';
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = 'light';
const open = "open";
const active = "active";

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const root = document.documentElement;

// theme //

const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);


const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

// Full Site Modals "open buttons"
for (const elm of openModal) {
    elm.addEventListener('click', function() {
        const modalID = this.dataset.open;
        document.getElementById(modalID).classList.add(isVisible);
    })
}

for (const elm of closeModal) {
    elm.addEventListener('click', function() {
        this.parentElement.parentElement.classList.remove(isVisible);
    })
}