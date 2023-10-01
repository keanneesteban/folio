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

const dataFilter = '[data-filter]';

const root = document.documentElement;

// theme //

const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

// portfolio //

const filterLink = document.querySelectorAll(dataFilter);

// modals //
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (elm, selector) => {
    if (document.querySelector(`${selector}.${active}`) !== null) {
        document.querySelector(`${selector}.${active}`).classList.remove(active);
    } 
    elm.classList.add(active);
}

const setTheme = (val) => {
    if (val === dark ) {
        root.setAttribute(dataTheme, dark);
        localStorage.setItem(theme, dark);
    } else {
        root.setAttribute(dataTheme, light);
        localStorage.setItem(theme, light);
    }
};

if (currentTheme) {
    root.setAttribute(dataTheme, currentTheme);
    switcher.forEach((btn) => {
        btn.classList.remove(active);
    })

    if (currentTheme === dark ) {
        switcher[1].classList.add(active);
    } else {
        switcher[0].classList.add(active);
    }
};

toggleTheme.addEventListener('click', function() {
    const tab = this.parentElement.parentElement;
    if (!tab.className.includes(open)) {
        tab.classList.add(open);
    } else {
        tab.classList.remove(open);
    }
});

for (const elm of switcher) {
    elm.addEventListener('click', function() {
        const toggle = this.dataset.toggle;
        setActive(elm, switcherBtn);
        setTheme(toggle);
    })
};

for (const link of filterLink) {
    link.addEventListener('click', function() {
        setActive(link, '.filter-link');
    })
}

// Full Site Modals "open buttons"
for (const elm of openModal) {
    elm.addEventListener('click', function() {
        const modalID = this.dataset.open;
        document.getElementById(modalID).classList.add(isVisible);
    })
};

for (const elm of closeModal) {
    elm.addEventListener('click', function() {
        this.parentElement.parentElement.classList.remove(isVisible);
    })
};