const loader = document.getElementById("loader");

loader.innerHTML = `

<div class="loader-content">

    <div class="logo-box">

        <div class="logo">&lt;CT&gt;</div>

    </div>

    <h2 class="loading-title">

        Jetti Charan Teja Naga Sai

    </h2>

    <p class="loading-text" id="loadingMessage">

        Initializing...

    </p>

    <div class="progress">

        <div class="progress-bar" id="progressBar"></div>

    </div>

    <div class="loading-percent">

        <span id="percent">

            0

        </span>%

    </div>

</div>

`;

const messages=[

"Loading Portfolio...",

"Loading Projects...",

"Preparing AI Assistant...",

"Fetching GitHub Data...",

"Optimizing Experience...",

"Almost Ready..."

];

let progress=0;

let index=0;

const bar=document.getElementById("progressBar");

const percent=document.getElementById("percent");

const text=document.getElementById("loadingMessage");

const interval=setInterval(()=>{

progress++;

bar.style.width=progress+"%";

percent.innerText=progress;

if(progress%18===0 && index<messages.length){

text.innerText=messages[index];

index++;

}

if(progress>=100){

clearInterval(interval);

setTimeout(()=>{

loader.classList.add("hide");

},500);

}

},25);