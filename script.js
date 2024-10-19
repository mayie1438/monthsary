// JavaScript for Chest Animation and Surprise Reveal
const chest = document.getElementById('chest');
const hiddenMessage = document.getElementById('hiddenMessage');

chest.addEventListener('click', () => {
  // Change chest image to the open chest
  chest.src = 'open.png';

  // Reveal the hidden message
  hiddenMessage.style.display = 'block';
});
