const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")


let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")

        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        navOpen = true
    }
})

// ============

document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
        let answer = item.querySelector('.question__caption');
        let icon = item.querySelector('.question__icon');

        // بستن بقیه سوالات باز شده
        document.querySelectorAll('.question').forEach(q => {
            if (q !== item) {
                q.classList.remove('open');
                q.querySelector('.question__caption').style.display = "none";
                q.querySelector('.question__icon').style.transform = "rotate(0deg)";
            }
        });

        // تغییر وضعیت سوال کلیک شده
        item.classList.toggle('open');
        if (item.classList.contains('open')) {
            answer.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        } else {
            answer.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
    });
});
