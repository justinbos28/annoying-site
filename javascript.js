function iosPopup() {
  document.getElementById("appStore").style.display = "block";
}

function androidPopup() {
  document.getElementById("playStore").style.display = "block";
}

function rainbowBackground() {
  const colors = [
    "#d51846",
    "#ffae00",
    "#ffff00",
    "#1eff00",
    "#007180",
    "#9900ff",
    "#ff00bf",
    "#ff0000"
  ];

  let index = 0;
  setInterval(() => {
    document.getElementsByClassName("grid-rechts")[0].style.transition = "0.5s ease";
    document.getElementsByClassName("grid-rechts")[0].style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 1000);
}

rainbowBackground();

function startRickroll() {
  let rickroll = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png";

  document.getElementsByClassName("phone")[0].src = rickroll;

  var audio = new Audio("assets/nevergonnagiveyouup.mp3");
  audio.loop = true;
  audio.play();

  setInterval(() => {
    document.getElementsByClassName("phone")[0].style.transform = "rotate(3600000deg)";
    document.getElementsByClassName("phone")[0].style.transition = "200s linear";
  }, 1500);
}