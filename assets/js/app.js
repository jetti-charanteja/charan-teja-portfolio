const terminal = document.getElementById("terminalText");

const lines = [

"charan@portfolio:~$ whoami",

"Jetti Charan Teja",

"",

"charan@portfolio:~$ education",

"B.Tech Computer Science",

"KL University",

"CGPA : 8.36",

"",

"charan@portfolio:~$ experience",

"Wipro (Google Client)",

"Fraud Analyst",

"October 2025 - Present",

"",

"charan@portfolio:~$ internships",

"• Kotlin Developer Intern",

"• UI/UX Developer Intern",

"",

"charan@portfolio:~$ skills",

"Python",

"Java",

"JavaScript",

"MySQL",

"HTML",

"CSS",

"SQL",

"",

"charan@portfolio:~$ certifications",

"Oracle OCI",

"Automation Anywhere",

"JP Morgan Software Engineering",

"",

"charan@portfolio:~$ interests",

"Building Software",

"Artificial Intelligence",

"UI/UX",

"Problem Solving",

"",

"charan@portfolio:~$ _"

];

let line = 0;

let character = 0;

function terminalAnimation(){

if(line >= lines.length)return;

const current = lines[line];

if(character <= current.length){

terminal.innerHTML += current.charAt(character);

character++;

setTimeout(terminalAnimation,20);

}else{

terminal.innerHTML+="\n";

line++;

character=0;

setTimeout(terminalAnimation,250);

}

}

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        terminalAnimation();

    }, 2500);

});   