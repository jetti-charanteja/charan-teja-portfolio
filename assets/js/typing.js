const roles = [

"Software Engineer",

"Python Developer",

"AI Data Specialist",

"UI/UX Enthusiast",

"Problem Solver"

];

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = roles[roleIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex = (roleIndex+1)%roles.length;

        }

    }

    setTimeout(typeEffect,deleting?40:100);

}

typeEffect();