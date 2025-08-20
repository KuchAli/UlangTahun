const btn = document.getElementById('playBtn');
const audio = document.getElementById('audio');
btn.onclick = function() {
  audio.play();
  btn.style.display = 'none';
};