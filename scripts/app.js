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

// for doctors list
    document.addEventListener("DOMContentLoaded", function () {
        const doctorCards = document.querySelectorAll(".doctor-card");
      
        doctorCards.forEach((card) => {
          card.addEventListener("click", function () {
            // حذف کلاس selected از همه کارت‌ها
            doctorCards.forEach((c) => c.classList.remove("selected"));
            // افزودن کلاس selected فقط به کارت کلیک‌شده
            this.classList.add("selected");
          });
        });
      });


    
// for doctors list

      document.addEventListener("DOMContentLoaded", function () {
        const nurseCards = document.querySelectorAll(".nurse-card");
      
        nurseCards.forEach((card) => {
          card.addEventListener("click", function () {
            // حذف کلاس selected از همه کارت‌ها
            nurseCards.forEach((c) => c.classList.remove("selected"));
            // افزودن کلاس selected فقط به کارت کلیک‌شده
            this.classList.add("selected");
          });
        });
      });
      