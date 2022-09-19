let item = document.querySelector('.animationBox');
let music = new Audio('Calvin-Harris-Feels.mp3');

item.addEventListener("mouseover", playMusic, false);
item.addEventListener("mouseout", stopMusic, false);

function playMusic() {
   music.play();
   music.currentTime =2.9
}

function stopMusic() {
   music.pause();
}