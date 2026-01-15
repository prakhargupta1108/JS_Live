let step = 1;
const question = document.getElementById("question");
const noBtn = document.getElementById("noBtn");

function yesClick() {
  if (step === 1) {
    question.innerText = "Would you like to go out with me sometime, Khushi? 💕";
    step = 2;
  } else {
    question.innerText = "Yayyy! You just made my day 😍💖";
    noBtn.style.display = "none";
    loveBlaster(); // 💥 LOVE BLASTER HERE
  }
}

function noClick() {
  if (step === 1) {
    question.innerText = "Okay 😄 One last question!";
    step = 2;
  }
}

/* NO button escapes */
noBtn.addEventListener("mouseover", () => {
  if (step === 2) {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 250 - 125;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }
});

/* ❤️ Love Blaster Function */
function loveBlaster() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.setProperty("--x", Math.random());

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}
