document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            btn.style.display = "flex";

        } else {

            btn.style.display = "none";

        }

    });

    btn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});