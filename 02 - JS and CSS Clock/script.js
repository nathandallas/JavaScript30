const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");  
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  // Get Date
  const now = new Date();
  // Seconds Hand
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // Min Hand
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;

  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  // Hour Hand
  const hours = now.getHours();
  const hoursDegrees = (hours / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
