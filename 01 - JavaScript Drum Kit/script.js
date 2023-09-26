function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stop Function from Running if No Audio Assigned to Key

  key.classList.add("playing");
  audio.currentTime = 0; // Rewind to Start of Audio so U can click consecutively
  audio.play();
};

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Skip if not transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound)