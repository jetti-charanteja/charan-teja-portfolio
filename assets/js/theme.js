const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light")){

        icon.className = "fa-solid fa-sun";

    }else{

        icon.className = "fa-solid fa-moon";

    }

}