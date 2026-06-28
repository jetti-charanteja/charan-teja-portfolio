document.addEventListener("DOMContentLoaded", async () => {

    const username = "jetti-charanteja";

    try {

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        const data = await response.json();

        document.getElementById("repoCount").textContent =
            data.public_repos;

        document.getElementById("githubGraph").src =
            `https://ghchart.rshah.org/${username}`;

    } catch (e) {

        console.log(e);

    }

});