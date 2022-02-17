
window.onload = function () {


    let burgerBtn = document.querySelector(".header-button");
    let menuX = document.querySelector(".main-nav-close");
    let menu = document.querySelector(".main-nav");


    let counter = 1;


    burgerBtn.onclick = function () {
        if (counter % 2 != 0) {
            menu.style.display = "block";
            counter++;
            console.log(counter);
        }
        else {
            menu.style.display = "none";
            counter--;
            console.log(counter);
        }

    }


    menuX.onclick = function () {
        menu.style.display = "none";
        counter--;
        console.log(counter);
    }




}
