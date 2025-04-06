const player = document.getElementById("player");
const startButton = document.getElementById("start-button");
const volumeSlider = document.getElementById("volume");
const volumeDisplay = document.getElementById("volume-display");

let isMuted = false;

function toggleMute() {
  isMuted = !isMuted;
  player.muted = isMuted;
}

startButton.addEventListener("click", async () => {
  const res = await fetch("sync.php");
  const data = await res.json();
  player.src = data.file;
  const now = Date.now() / 1000;
  player.currentTime = now - data.start;
  await player.play();
  startButton.disabled = true;
});

volumeSlider.addEventListener("input", () => {
  player.volume = volumeSlider.value;
  volumeDisplay.innerText = `Głośność: ${Math.round(player.volume * 100)}%`;
});
