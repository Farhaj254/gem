// Get all game boxes
const gameBoxes = document.querySelectorAll('.game-box');

// Add click event listeners to each game box
gameBoxes.forEach(box => {
  box.addEventListener('click', () => {
    // Get the game URL from the link within the box
    const gameUrl = box.querySelector('a').href;

    // Open the game in a new tab/window
    window.open(gameUrl, '_blank'); 
  });
});
