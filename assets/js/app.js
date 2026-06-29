const terminal = document.getElementById("terminalText");

const lines = [

"charan@portfolio:~$ whoami",

"Jetti Charan Teja Naga Sai",

"",

"charan@portfolio:~$ education",

"B.Tech Computer Science - Data Science & Big Data Analytics Specialization",

"KL University H",

"CGPA : 8.36",

"",

"charan@portfolio:~$ experience",

"Wipro (Google Client)",

"Fraud Analyst",

"September 2025 - Present",

"",

"charan@portfolio:~$ internships",

"• Kotlin Developer Intern at SP SOftware SOlutions",

"• UI/UX Developer Intern at Areksoft Technologies ",

"",

"charan@portfolio:~$ skills",

"Python",

"Java",

"JavaScript",

"MySQL",

"HTML",

"CSS",

"SQL",

"UI/UX Designing",


"Data Analytics",




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
"Data Analyst",


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
