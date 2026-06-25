let popupCount = 0;

let messages = [

    "Thesis trauma detected.",
    "Sleep deprivation level: EXTREME.",
    "999 overdue breakdowns found.",
    "Student wallet is critically empty.",
    "Education system escaped successfully.",
    "Mental stability not found.",
    "Graduate status confirmed.",
    "Coffee addiction detected."

];

function startChaos(){

    document.getElementById("boot").style.display = "none";

    createPopup();
}

function createPopup(){

    popupCount++;

    let popup =
    document.createElement("div");

    popup.className = "popup";

    let currentMessage =
    messages[popupCount - 1];

    popup.innerHTML = `

    <div class="topbar">
        Windows Security Alert
    </div>

    <div class="content">

        <div class="warning">🚨</div>

        <h2>VIRUS DETECTED</h2>

        <p>

        Dangerous file found:
        <br><br>

        <b>final_FINAL_realFinal_v12.pdf.exe</b>

        <br><br>

        ${currentMessage}

        </p>

        <button onclick="moreChaos()">
            REMOVE VIRUS
        </button>

    </div>

    `;

    document.body.appendChild(popup);

    // Random position pero hindi mapuputol

    setTimeout(() => {

    let popupWidth = popup.offsetWidth;
    let popupHeight = popup.offsetHeight;

    let centerX =
    (window.innerWidth / 2) - (popupWidth / 2);

    let centerY =
    (window.innerHeight / 2) - (popupHeight / 2);

    let offsetX =
    (Math.random() * 120) - 60;

    let offsetY =
    (Math.random() * 120) - 60;

    popup.style.left =
    (centerX + offsetX) + "px";

    popup.style.top =
    (centerY + offsetY) + "px";

},10);
}

/* MORE CHAOS */

function moreChaos(){

    if(popupCount < messages.length){

        createPopup();

    }else{

        startShutdown();
    }
}

/* SHUTDOWN SCREEN */

function startShutdown(){

    document.querySelectorAll(".popup")
    .forEach(p => p.remove());

    let shutdown =
    document.getElementById("shutdownScreen");

    shutdown.style.display = "flex";

    let count = 5;

    let counter =
    document.getElementById("countdown");

    counter.innerText = count;

    let timer = setInterval(() => {

        count--;

        counter.innerText = count;

        if(count <= 0){

            clearInterval(timer);

            shutdown.style.display = "none";

            finishChaos();
        }

    },1000);
}

/* FINAL REVEAL */

function finishChaos(){

    let final =
    document.getElementById("final");

    final.style.display = "flex";

    createConfetti();

    setInterval(()=>{

        alert("🎓 CONGRATULATIONS GRADUATE 🎓");

    },8000);
}

/* CONFETTI */

function createConfetti(){

    for(let i=0; i<250; i++){

        let confetti =
        document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
        Math.random()*100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.background =
        `hsl(${Math.random()*360},100%,50%)`;

        confetti.style.animationDuration =
        (Math.random()*4+3) + "s";

        document.body.appendChild(confetti);
    }
}

/* CLICK MESSAGE */

function showMessage(){

    document.getElementById("card1")
    .style.display = "none";

    document.getElementById("card2")
    .style.display = "block";
}