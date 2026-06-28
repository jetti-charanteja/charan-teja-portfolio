document.addEventListener("DOMContentLoaded", async () => {

    const username = "jetti-charanteja";

    try {

        const response = await fetch(

            `https://api.github.com/users/${username}`

        );

        const data = await response.json();

        document.getElementById("githubAvatar").src =
            data.avatar_url;

        document.getElementById("githubName").textContent =
            data.name;

        document.getElementById("githubBio").textContent =
            data.bio;

        document.getElementById("repos").textContent =
            data.public_repos;

        document.getElementById("followers").textContent =
            data.followers;

        document.getElementById("following").textContent =
            data.following;

        document.getElementById("contributionGraph").src =
            `https://ghchart.rshah.org/${username}`;

    }

    catch(error){

        console.log(error);

    }

});