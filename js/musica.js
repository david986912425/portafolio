const audioElement = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

playButton.addEventListener("click", function() {
  audioElement.play()
  playButton.style.display = "none";
  pauseButton.style.display = "block";
  console.log('Play')
});

pauseButton.addEventListener("click", function() {
  audioElement.pause();
  pauseButton.style.display = "none";
  playButton.style.display = "block";
  console.log('pause')
});