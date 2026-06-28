document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".timeline-item");

    function revealTimeline() {

        items.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                item.classList.add("show");

            }

        });

    }

    revealTimeline();

    window.addEventListener("scroll", revealTimeline);

});