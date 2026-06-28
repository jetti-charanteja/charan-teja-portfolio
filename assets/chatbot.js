document.addEventListener("DOMContentLoaded", () => {

const knowledge={

about:"I'm Jetti Charan Teja, a Software Engineer passionate about AI, Python, Java and Full Stack Development.",

skills:"Python, Java, JavaScript, HTML, CSS, SQL, MySQL, Git, AI, Automation Anywhere, Oracle Cloud.",

projects:"Portfolio Website, Student Management System, AI Dataset Labeling Tool and more.",

experience:"Currently working at Wipro on Google Trust & Safety as a Fraud Analyst.",

education:"B.Tech in Computer Science Engineering with 8.36 CGPA.",

resume:"You can download my resume using the Resume button at the top.",

contact:"📧 Email : jcharanteja11@gmail.com",

github:"GitHub: https://github.com/YOUR_USERNAME",

linkedin:"LinkedIn: https://linkedin.com/in/jetti-charanteja"

};

const toggle=document.getElementById("chat-toggle");

const chat=document.querySelector(".chat-window");

const close=document.getElementById("close-chat");

const send=document.getElementById("send-btn");

const input=document.getElementById("user-input");

const body=document.getElementById("chat-body");

// Toggle Chat Window
toggle.addEventListener("click", () => {

    if (chat.style.display === "flex") {

        chat.style.display = "none";

    } else {

        chat.style.display = "flex";

        input.focus();

    }

});

// Close Button
close.addEventListener("click", () => {

    chat.style.display = "none";

});

function addMessage(text,type){

const div=document.createElement("div");

div.className=type;

div.innerHTML=text;

body.appendChild(div);

body.scrollTop=body.scrollHeight;

}

function botReply(question){

question=question.toLowerCase();

let reply="😅 Sorry, I don't understand that yet.";

if(question.includes("about")||question.includes("yourself")||question.includes("who"))

reply=knowledge.about;

else if(question.includes("skill"))

reply=knowledge.skills;

else if(question.includes("project"))

reply=knowledge.projects;

else if(question.includes("experience"))

reply=knowledge.experience;

else if(question.includes("education"))

reply=knowledge.education;

else if(question.includes("resume"))

reply=knowledge.resume;

else if(question.includes("contact")||question.includes("email"))

reply=knowledge.contact;

else if(question.includes("github"))

reply=knowledge.github;

else if(question.includes("linkedin"))

reply=knowledge.linkedin;

setTimeout(()=>{

addMessage(reply,"bot-message");

},600);

}

send.onclick=function(){

const msg=input.value.trim();

if(msg==="") return;

addMessage(msg,"user-message");

botReply(msg);

input.value="";

};

input.addEventListener("keypress",function(e){

if(e.key==="Enter")

send.click();

});

});