// ссылки для работы с темой оформления
const themeRefs = {
    bodyRef: document.querySelector('body'), // ссылка на body
    themeSwitcherRef: document.getElementById('theme-switch-toggle'), // ссылка на чекбокс переключающий тему
   };

// переменные хранящие классы тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// функция переключающая тему
const onSwitch = () => {

    if (themeRefs.themeSwitcherRef.checked) {
        themeRefs.bodyRef.classList.remove(Theme.LIGHT)
        themeRefs.bodyRef.classList.add(Theme.DARK)
        localStorage.setItem('theme', Theme.DARK);

    } else {
        themeRefs.bodyRef.classList.remove(Theme.DARK)
        themeRefs.bodyRef.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT);

    }
}

// функция проверяющая lockalStorage и возращающая сохраненные там значения
const checkLocalStorageTheme = () => {
    if (localStorage.theme === 'dark-theme') {
        themeRefs.bodyRef.classList.remove(Theme.LIGHT)
        themeRefs.bodyRef.classList.add(Theme.DARK)
        themeRefs.themeSwitcherRef.checked = true;
    } else {
        themeRefs.bodyRef.classList.remove(Theme.DARK)
        themeRefs.bodyRef.classList.add(Theme.LIGTH)
        themeRefs.themeSwitcherRef.checked = false;
    }
}

// вызов функции проверяющей lockalSorage
checkLocalStorageTheme();

// слушатель события для чекбокса переключающего тему
themeRefs.themeSwitcherRef.addEventListener('change', onSwitch);

