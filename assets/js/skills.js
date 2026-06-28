document.addEventListener("DOMContentLoaded", () => {

    const circles = document.querySelectorAll(".progress-circle");

    function animateSkills() {

        circles.forEach(circle => {

            const top = circle.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                circle.style.setProperty(

                    "--progress",

                    circle.dataset.percent

                );

            }

        });

    }

    animateSkills();

    window.addEventListener("scroll", animateSkills);

});