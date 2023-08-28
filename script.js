
window.onload = function () {
    let burgerBtn = document.querySelector(".header-button");
    let menuX = document.querySelector(".main-nav-close");
    let menu = document.querySelector(".main-nav");
    let counter = 1;

    burgerBtn.onclick = function () {
        if (counter % 2 !== 0) {
            menu.classList.remove("main-nav-max")
            counter++;
        }
        else {
            menu.classList.add("main-nav-max")
            counter--;
        }
    }

    menuX.onclick = function () {
        menu.classList.add("main-nav-max")
        counter--;
    }
}
